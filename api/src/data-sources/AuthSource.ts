import { compare } from 'bcrypt';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';
import { NexusGenRootTypes } from '../../.yoga/nexus';
import {
  InvalidEmailConfirmTokenError,
  InvalidEmailError,
  InvalidLoginError,
  InvalidOldPasswordError,
  InvalidUserError,
  MissingDataError,
  ResetTokenExpiredError,
  UserDeletedError,
  UserEmailExistsError,
  UserNotFoundError,
  VagueError,
} from '../errors';
import {
  generateToken,
  getHashedPassword,
  getUser,
  validatePassword,
} from '../utils';
import { Context } from './Context';

interface SignUpInputInterface {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class AuthSource {
  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  public constructor(protected ctx: Context) {}

  public async changePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<NexusGenRootTypes['UserIdPayload']> {
    const user = await getUser(this.ctx);
    if (!user) {
      throw new InvalidUserError();
    }
    const valid = await compare(oldPassword, user.password);
    if (!valid) {
      throw new InvalidOldPasswordError();
    }
    await validatePassword(newPassword);
    const password = await getHashedPassword(newPassword);
    const newUser = await this.ctx.prisma.updateUser({
      data: { password, updatedBy: { connect: { id: user.id } } },
      where: { id: user.id },
    });
    // @TODO: Handle when password was changed but email fails
    await this.ctx.email.sendPasswordChangedEmail(
      newUser.email,
      newUser.firstName,
    );
    return {
      id: newUser.id,
    };
  }

  public async confirmEmail(
    email: string,
    emailConfirmToken: string,
  ): Promise<NexusGenRootTypes['AuthPayload']> {
    if (!emailConfirmToken || !email) {
      throw new MissingDataError();
    }

    const user = await this.ctx.prisma.user({ email });
    if (!user) {
      throw new UserNotFoundError();
    }

    if (user.emailConfirmToken !== emailConfirmToken || user.emailConfirmed) {
      throw new InvalidEmailConfirmTokenError();
    }

    const updatedUser = await this.ctx.prisma.updateUser({
      data: {
        emailConfirmToken: '',
        emailConfirmed: true,
        updatedBy: { connect: { id: user.id } },
      },
      where: { id: user.id },
    });

    await this.ctx.email.sendWelcomeEmail(
      updatedUser.email,
      updatedUser.firstName,
    );

    return {
      token: generateToken(updatedUser),
      user: updatedUser,
    };
  }

  public async login(
    email: string,
    password: string,
  ): Promise<NexusGenRootTypes['AuthPayload']> {
    const user = await this.ctx.prisma.user({ email });
    if (!user) {
      throw new InvalidLoginError();
    }

    if (user.deletedAt) {
      throw new UserDeletedError();
    }

    const valid = await compare(password, user.password);
    if (!valid) {
      throw new InvalidLoginError();
    }

    const updatedUser = await this.ctx.prisma.updateUser({
      data: {
        lastLogin: new Date().toISOString(),
        updatedBy: { connect: { id: user.id } },
      },
      where: { id: user.id },
    });

    return {
      token: generateToken(updatedUser),
      user: updatedUser,
    };
  }

  public async resetPassword(
    email: string,
    newPassword: string,
    resetToken: string,
  ): Promise<NexusGenRootTypes['UserIdPayload']> {
    if (!resetToken || !newPassword) {
      throw new MissingDataError();
    }

    const user = await this.ctx.prisma.user({ email });
    if (!user || !user.resetExpires || user.resetToken !== resetToken) {
      throw new VagueError();
    }

    if (new Date() > new Date(user.resetExpires)) {
      throw new ResetTokenExpiredError();
    }

    await validatePassword(newPassword);

    const hashedPassword = await getHashedPassword(newPassword);

    await this.ctx.prisma.updateUser({
      data: {
        password: hashedPassword,
        resetExpires: undefined,
        resetToken: '',
        updatedBy: { connect: { id: user.id } },
      },
      where: { id: user.id },
    });

    // @TODO: Handle when password was changed but email fails
    await this.ctx.email.sendPasswordChangedEmail(user.email, user.firstName);

    return {
      id: user.id,
    };
  }

  public async signup(
    data: SignUpInputInterface,
  ): Promise<NexusGenRootTypes['AuthPayload']> {
    if (!data.email) {
      throw new MissingDataError();
    }

    const userExists = await this.ctx.prisma.user({ email: data.email });
    if (userExists) {
      throw new UserEmailExistsError();
    }

    await validatePassword(data.password);

    const hashedPassword = await getHashedPassword(data.password);

    const emailConfirmToken = uuid();

    // @TODO: Add role, settings, organzation
    const newUser = await this.ctx.prisma.createUser({
      email: data.email,
      emailConfirmToken,
      emailConfirmed: false,
      firstName: data.firstName,
      lastName: data.lastName,
      organization: {
        create: {
          name: data.email,
        },
      },
      password: hashedPassword,
    });

    await this.ctx.prisma.updateUser({
      data: { createdBy: { connect: { id: newUser.id } } },
      where: { id: newUser.id },
    });

    // @TODO: Handle when user, organization is saved to DB but email fails to send
    await this.ctx.email.sendAccountConfirmationEmail(
      data.email,
      data.firstName,
      emailConfirmToken,
    );

    return {
      token: generateToken(newUser),
      user: newUser,
    };
  }

  public async triggerAccountConfirmationEmail(
    email: string,
  ): Promise<NexusGenRootTypes['TriggerEmailPayload']> {
    if (
      !Yup.string()
        .email()
        .isValid(email)
    ) {
      throw new InvalidEmailError();
    }

    const user = await this.ctx.prisma.user({ email });
    if (!user) {
      return { ok: true };
    }

    if (user.emailConfirmed === true) {
      return { ok: true };
    }

    const emailConfirmToken = uuid();

    await this.ctx.prisma.updateUser({
      data: { emailConfirmToken, updatedBy: { connect: { id: user.id } } },
      where: { id: user.id },
    });

    // @TODO: Handle when resetExpires and resetToken is saved but email fails
    await this.ctx.email.sendAccountConfirmationEmail(
      user.email,
      user.firstName,
      emailConfirmToken,
    );

    return {
      ok: true,
    };
  }

  public async triggerPasswordReset(
    email: string,
  ): Promise<NexusGenRootTypes['TriggerEmailPayload']> {
    if (
      !Yup.string()
        .email()
        .isValid(email)
    ) {
      throw new InvalidEmailError();
    }

    const user = await this.ctx.prisma.user({ email });
    if (!user) {
      return { ok: true };
    }

    const resetToken = uuid();
    const now = new Date();
    const resetExpires = new Date(now.getTime() + 7200000).toISOString();

    await this.ctx.prisma.updateUser({
      data: {
        resetExpires,
        resetToken,
        updatedBy: { connect: { id: user.id } },
      },
      where: { id: user.id },
    });

    // @TODO: Handle when resetExpires and resetToken is saved but email fails
    await this.ctx.email.sendPasswordResetEmail(
      user.email,
      user.firstName,
      resetToken,
    );

    return {
      ok: true,
    };
  }
}

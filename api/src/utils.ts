import { hash } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { string } from 'yup';
import { User } from '../.yoga/prisma-client';
import { Context } from './data-sources/context';
import {
  ContextSpecificPasswordError,
  PasswordNotStringError,
  PasswordTooLongError,
  PasswordTooShortError,
  RepeatingCharactersOrDigitsError,
} from './errors';

interface Token {
  sub: string;
  firstName: string;
  lastName: string;
  email: string;
  emailConfirmed: boolean;
}

export class AuthError extends Error {
  public constructor() {
    super('Not authorized');
  }
}

export function getUserId(context: Context): string | AuthError {
  const Authorization = context.req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, process.env
      .APP_SECRET as string) as Token;
    return verifiedToken && verifiedToken.sub;
  }
  throw new AuthError();
}

export function getUser(ctx: Context): Promise<any> {
  return ctx.prisma.user({ id: getUserId(ctx) as string });
}

export async function validatePassword(password: string): Promise<null | any> {
  const isString = await string()
    .required()
    .isValid(password);
  const tooShort = await string()
    .min(8)
    .isValid(password);
  const tooLong = await string()
    .max(64)
    .isValid(password);
  const repeating = await string()
    .matches(/([a-zA-Z0-9])\1{1,}/)
    .isValid(password);
  const contextSpecific = await !string()
    .matches(/syllabus|school|lms|login|portal|app/)
    .isValid(password);
  if (!isString) {
    throw new PasswordNotStringError();
  } else if (!tooShort) {
    throw new PasswordTooShortError();
  } else if (!tooLong) {
    throw new PasswordTooLongError();
  } else if (repeating) {
    throw new RepeatingCharactersOrDigitsError();
  } else if (contextSpecific) {
    // @TODO change to load in a list of context specific matches
    throw new ContextSpecificPasswordError();
  }
  // @TODO return new SequentialCharactersOrDigitsError()
  // @TODO return new CommonPasswordError()
  return;
}

export function getHashedPassword(password: string): Promise<string> {
  return hash(password, 10);
}

export function generateToken(user: User, isAdmin: boolean): string {
  return sign(
    {
      // iat set automatically
      // exp is set to 1 week from current
      exp: Math.floor(Date.now() / 1000) + 60 * 10080,
      sub: user.id,
      aud: 'https://syllabusapp.com',
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      emailConfirmed: user.emailConfirmed,
      isAdmin,
    },
    process.env.APP_SECRET as string,
  );
}

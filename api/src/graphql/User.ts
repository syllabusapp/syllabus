import {
  arg,
  inputObjectType,
  objectType,
  prismaExtendType,
  prismaObjectType,
  stringArg,
} from 'yoga';
import { getUserId } from '../utils/utils';

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('email');
    t.string('firstName');
    t.string('lastName');
  },
});

export const SignUpInput = inputObjectType({
  name: 'SignUpInput',
  definition(t) {
    t.string('email');
    t.string('firstName');
    t.string('lastName');
    t.string('password');
  },
});

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

export const TriggerEmailPayload = objectType({
  name: 'TriggerEmailPayload',
  definition(t) {
    t.boolean('ok');
  },
});

export const UserIdPayload = objectType({
  name: 'UserIdPayload',
  definition(t) {
    t.string('id');
  },
});

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields({
      filter: [
        'id',
        'emailConfirmToken',
        'lastLogin',
        'password',
        'resetExpires',
        'resetToken',
        'createdBy',
        'deletedAt',
        'updatedBy',
      ],
    });
  },
});

export const UserQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['user', 'users']);
    t.prismaFields([]);

    t.field('currentUser', {
      type: 'User',
      resolve: (_parent, _args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.prisma.user({ id: userId as string });
      },
    });
  },
});

export const UserMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields(['createUser', 'deleteUser', 'updateUser']);
    t.prismaFields([]);

    t.field('changePassword', {
      type: 'UserIdPayload',
      args: {
        oldPassword: stringArg(),
        newPassword: stringArg(),
      },
      resolve: async (_, { oldPassword, newPassword }, { auth }) =>
        await auth.changePassword(oldPassword, newPassword),
    });

    t.field('confirmAccount', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        emailConfirmToken: stringArg(),
      },
      resolve: async (_, { email, emailConfirmToken }, { auth }) =>
        await auth.confirmEmail(email, emailConfirmToken),
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, { auth }) =>
        await auth.login(email, password),
    });

    t.field('resetPassword', {
      type: 'UserIdPayload',
      args: {
        email: stringArg(),
        newPassword: stringArg(),
        resetToken: stringArg(),
      },
      resolve: async (_, { email, newPassword, resetToken }, { auth }) =>
        await auth.resetPassword(email, newPassword, resetToken),
    });

    t.field('signup', {
      type: 'AuthPayload',
      args: {
        data: arg({
          type: 'SignUpInput',
          required: true,
        }),
      },
      resolve: async (_, { data }, { auth }) => await auth.signup(data),
    });

    t.field('triggerAccountConfirmationEmail', {
      type: 'TriggerEmailPayload',
      args: {
        email: stringArg(),
      },
      resolve: async (_, { email }, { auth }) =>
        await auth.triggerAccountConfirmationEmail(email),
    });

    t.field('triggerPasswordReset', {
      type: 'TriggerEmailPayload',
      args: {
        email: stringArg(),
      },
      resolve: async (_, { email }, { auth }) =>
        await auth.triggerPasswordReset(email),
    });
  },
});

import {
  arg,
  inputObjectType,
  objectType,
  prismaObjectType,
  stringArg,
} from 'yoga';

/*
  type Mutation {
    changePassword(oldPassword: String!, newPassword: String!): UserIdPayload!
    confirmAccount(email: String!, emailConfirmToken: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    passwordReset(
      email: String!
      resetToken: String!
      newPassword: String!
    ): UserIdPayload!
    signup(data: SignupInput!): AuthPayload!
    triggerAccountConfirmationEmail(email: String!): TriggerConfirmationEmailPayload!
    triggerPasswordReset(email: String!): TriggerPasswordResetPayload!
  }
*/

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

export const UserIdPayload = objectType({
  name: 'UserIdPayload',
  definition(t) {
    t.string('id');
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

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('email');
    t.string('firstName');
    t.string('lastName');
  },
});

export const TriggerEmailPayload = objectType({
  name: 'TriggerEmailPayload',
  definition(t) {
    t.boolean('ok');
  },
});

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
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

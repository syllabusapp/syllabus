import { prismaExtendType, prismaObjectType } from 'yoga';

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
  },
});

export const UserMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields(['createUser', 'deleteUser', 'updateUser']);
    t.prismaFields([]);
  },
});

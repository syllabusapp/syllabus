import { prismaExtendType, prismaObjectType } from 'yoga';

export const Role = prismaObjectType({
  name: 'Role',
  definition(t) {
    t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
  },
});

export const RoleQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['role', 'roles']);
    t.prismaFields([]);
  },
});

export const RoleMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields(['createRole', 'deleteRole', 'updateRole']);
    t.prismaFields([]);
  },
});

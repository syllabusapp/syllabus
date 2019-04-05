import { prismaExtendType, prismaObjectType } from 'yoga';

export const Organization = prismaObjectType({
  name: 'Organization',
  definition(t) {
    t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
  },
});

export const OrganizationQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['organization', 'organizations']);
    t.prismaFields([]);
  },
});

export const OrganizationMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields([
    //   'createOrganization',
    //   'deleteOrganization',
    //   'updateOrganization',
    // ]);
    t.prismaFields([]);
  },
});

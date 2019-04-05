import { prismaExtendType, prismaObjectType } from 'yoga';

export const Plan = prismaObjectType({
  name: 'Plan',
  definition(t) {
    t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
  },
});

export const PlanQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['plan', 'plans']);
    t.prismaFields([]);
  },
});

export const PlanMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields(['createPlan', 'deletePlan', 'updatePlan']);
    t.prismaFields([]);
  },
});

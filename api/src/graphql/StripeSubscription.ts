import { prismaExtendType, prismaObjectType } from 'yoga';

export const StripeSubscription = prismaObjectType({
  name: 'StripeSubscription',
  definition(t) {
    t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
  },
});

export const StripeSubscriptionQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['stripeSubscription', 'stripeSubscriptions']);
    t.prismaFields([]);
  },
});

export const StripeSubscriptionMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields([
    //   'createStripeSubscription',
    //   'deleteStripeSubscription',
    //   'updateStripeSubscription',
    // ]);
    t.prismaFields([]);
  },
});

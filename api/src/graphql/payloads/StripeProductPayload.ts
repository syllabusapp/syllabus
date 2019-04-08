import { objectType } from 'yoga';

export const StripeProductPayload = objectType({
  name: 'StripeProductPayload',
  definition(t) {
    t.string('name');
    t.id('stripeId');
    t.field('type', { type: 'ProductTypeType' });
  },
});

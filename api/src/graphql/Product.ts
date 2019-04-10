import {
  arg,
  enumType,
  objectType,
  prismaExtendType,
  prismaObjectType,
  stringArg,
} from 'yoga';

export const StripeProductPayload = objectType({
  name: 'StripeProductPayload',
  definition(t) {
    t.string('name');
    t.id('stripeId');
    t.field('type', { type: 'ProductTypeType' });
  },
});

export const ProductTypeType = enumType({
  name: 'ProductTypeType',
  members: ['Good', 'Service'],
});

export const Product = prismaObjectType({
  name: 'Product',
  definition(t) {
    t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
  },
});

export const ProductQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['product', 'products']);
    t.prismaFields([]);
  },
});

export const ProductMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields(['createProduct', 'deleteProduct', 'updateProduct']);
    t.prismaFields([]);

    t.field('addProduct', {
      type: 'StripeProductPayload',
      authorize: (_root, _args, ctx) => ctx.auth.canPerformAdminAction(),
      args: {
        name: stringArg(),
        type: arg({
          type: 'ProductTypeType',
          required: true,
        }),
      },
      resolve: async (_, { name, type }, { stripe }) =>
        await stripe.addProduct(name, type),
    });
  },
});

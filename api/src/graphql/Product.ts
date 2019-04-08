import { arg, prismaExtendType, prismaObjectType, stringArg } from 'yoga';

/*
  type Mutation {
    addProduct(name: String!, type: ProductTypeType!): Product!
  }
*/

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
      authorize: (root, args, ctx) => ctx.auth.canPerformAdminAction(),
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

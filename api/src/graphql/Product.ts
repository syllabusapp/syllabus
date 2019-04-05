import { prismaExtendType, prismaObjectType } from 'yoga';

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
  },
});

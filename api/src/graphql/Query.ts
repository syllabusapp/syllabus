import { prismaObjectType } from 'yoga';
import { getUserId } from '../utils';

/*
  type Query {
    currentUser: User
  }
*/
export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.field('currentUser', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.prisma.user({ id: userId });
      },
    });
  },
});

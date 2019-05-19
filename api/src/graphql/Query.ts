import { prismaObjectType, stringArg } from 'yoga';

/*
  type Query {
  }
*/
export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.string('helloWorld', {
      args: {
        name: stringArg(),
      },
      resolve: (_parent, { name }, { auth }) => auth.helloWorld(name),
    });
  },
});

import { prismaObjectType } from 'yoga';

/*
  type Query {
    currentUser: User
  }
*/
export const Query = prismaObjectType({
  name: 'Query',
  definition() {},
});

import { TypegenAutoConfigOptions } from 'nexus/dist/core';
import * as path from 'path';
import { ApolloServer, express, makePrismaSchema, yogaEject } from 'yoga';
import datamodelInfo from '../.yoga/nexus-prisma';
import { prisma } from '../.yoga/prisma-client';
import context from './context';
import * as types from './graphql';

export default yogaEject({
  async server() {
    const schema = makePrismaSchema({
      types,
      prisma: {
        datamodelInfo,
        client: prisma,
      },
      outputs: {
        schema: path.join(__dirname, './schema.graphql'),
        typegen: path.join(__dirname, '../.yoga/nexus.ts'),
      },
      nonNullDefaults: {
        input: true,
        output: true,
      },
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      typegenAutoConfig: {
        sources: [
          {
            source: path.join(__dirname, './context.ts'),
            alias: 'ctx',
          },
          {
            source: path.join(__dirname, '../.yoga/prisma-client/index.ts'),
            alias: 'prisma',
          },
          ,
        ],
        contextType: 'ctx.Context',
      } as TypegenAutoConfigOptions,
    });
    const apolloServer = new ApolloServer.ApolloServer({
      schema,
      context,
      introspection: true,
    });
    const app = express();

    apolloServer.applyMiddleware({ app, path: '/' });

    return app;
  },
  async startServer(app) {
    return app.listen({ port: 4000 }, () => {
      console.log(`🚀  Server ready at http://localhost:4000/`);
    });
  },
  async stopServer(http) {
    http.close();
  },
});

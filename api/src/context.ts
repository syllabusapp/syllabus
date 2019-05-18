import { Request } from 'express';
import { yogaContext } from 'yoga';
import { Prisma } from '../.yoga/prisma-client';
import { AuthSource } from './dataSources/AuthSource';
import { Context } from './dataSources/context';
import { EmailSource } from './dataSources/EmailSource';
import { StripeSource } from './dataSources/StripeSource';

export interface Context {
  auth: AuthSource;
  email: EmailSource;
  prisma: Prisma;
  req: Request;
  stripe: StripeSource;
}

export default yogaContext(({ req }) => new Context(req));

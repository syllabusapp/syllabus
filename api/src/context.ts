import { yogaContext } from 'yoga';
import { Prisma } from '../.yoga/prisma-client';
import { AuthSource } from './data-sources/AuthSource';
import { Context } from './data-sources/Context';
import { EmailSource } from './data-sources/EmailSource';
import { StripeSource } from './data-sources/StripeSource';

export interface Context {
  auth: AuthSource;
  email: EmailSource;
  prisma: Prisma;
  stripe: StripeSource;
}

export default yogaContext(({ req }) => new Context(req));

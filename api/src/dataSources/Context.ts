import { Request } from 'express';
import { prisma } from '../../.yoga/prisma-client';
import { AuthSource } from './AuthSource';
import { EmailSource } from './EmailSource';
import { StripeSource } from './StripeSource';

export class Context {
  public auth = new AuthSource(this);
  public email = new EmailSource(this);
  public prisma = prisma;
  public stripe = new StripeSource(this);

  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  public constructor(public req: Request) {}
}

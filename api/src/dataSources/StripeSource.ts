import * as Stripe from 'stripe';
import { NexusGenRootTypes } from '../../.yoga/nexus';
import { ProductTypeType } from '../../.yoga/prisma-client';
import { ProductCreationError } from '../utils/errors';
import { getUserId } from '../utils/utils';
import { Context } from './Context';
const stripe = new Stripe(process.env.STRIPE_TEST_PRIVATE_KEY as string);

export class StripeSource {
  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  public constructor(protected ctx: Context) {}

  public async addProduct(
    name: string,
    type: ProductTypeType,
  ): Promise<NexusGenRootTypes['StripeProductPayload']> {
    const currentUser = await getUserId(this.ctx);
    const lowercaseType = String(type).toLowerCase();
    const result = await stripe.products.create({
      name,
      type: lowercaseType as Stripe.products.ProductType,
    });
    const prismaResult = await this.ctx.prisma.createProduct({
      name,
      stripeId: result.id,
      type,
      createdBy: {
        connect: {
          id: currentUser as string,
        },
      },
    });
    if (!prismaResult.id) {
      await stripe.products.del(result.id);
      throw new ProductCreationError();
    }
    return {
      name: prismaResult.name,
      type: prismaResult.type,
      stripeId: prismaResult.stripeId,
    };
  }
}

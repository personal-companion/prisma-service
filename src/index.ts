import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

import { Context } from './index.d';

const prisma = new PrismaClient().$extends(withAccelerate());

export const createContext = async (ctx: any): Promise<Context> => {
  // Skip if you are not using a serverless environment
  ctx.callbackWaitsForEmptyEventLoop = false;

  return { ...ctx, prisma };
};

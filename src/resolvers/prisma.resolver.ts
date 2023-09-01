import { Inject } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma.service';

@Resolver()
export class PrismaResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  @Query(() => String)
  getUsers() {
    return;
  }
}

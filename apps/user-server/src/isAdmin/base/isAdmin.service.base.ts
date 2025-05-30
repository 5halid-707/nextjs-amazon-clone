/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  IsAdmin as PrismaIsAdmin,
  Order as PrismaOrder,
  Product as PrismaProduct,
  Review as PrismaReview,
} from "@prisma/client";

export class IsAdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.IsAdminCountArgs, "select">): Promise<number> {
    return this.prisma.isAdmin.count(args);
  }

  async isAdmins(args: Prisma.IsAdminFindManyArgs): Promise<PrismaIsAdmin[]> {
    return this.prisma.isAdmin.findMany(args);
  }
  async isAdmin(
    args: Prisma.IsAdminFindUniqueArgs
  ): Promise<PrismaIsAdmin | null> {
    return this.prisma.isAdmin.findUnique(args);
  }
  async createIsAdmin(args: Prisma.IsAdminCreateArgs): Promise<PrismaIsAdmin> {
    return this.prisma.isAdmin.create(args);
  }
  async updateIsAdmin(args: Prisma.IsAdminUpdateArgs): Promise<PrismaIsAdmin> {
    return this.prisma.isAdmin.update(args);
  }
  async deleteIsAdmin(args: Prisma.IsAdminDeleteArgs): Promise<PrismaIsAdmin> {
    return this.prisma.isAdmin.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.isAdmin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getOrders(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.isAdmin
      .findUnique({
        where: { id: parentId },
      })
      .orders();
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.isAdmin
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }

  async getReviews(parentId: string): Promise<PrismaReview | null> {
    return this.prisma.isAdmin
      .findUnique({
        where: { id: parentId },
      })
      .reviews();
  }
}

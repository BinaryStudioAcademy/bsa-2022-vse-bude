import type { PrismaClient, Product, ProductType } from '@prisma/client';

export class ProductRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(): Promise<Product[]> {
    return this._dbClient.product.findMany();
  }

  public getByType(type: ProductType, take: number): Promise<Product[]> {
    return this._dbClient.product.findMany({
      take,
      where: {
        type,
      },
    });
  }
}

import type { PrismaClient, Product, ProductType } from '@prisma/client';
import { Get, Query, Route, Tags } from 'tsoa';

@Route('product')
@Tags('Product')
export class ProductRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  @Get('getAll')
  public getAll(): Promise<Product[]> {
    return this._dbClient.product.findMany();
  }

  @Get('getByType')
  public getByType(
    @Query() type: ProductType,
    @Query() take: number,
  ): Promise<Product[]> {
    return this._dbClient.product.findMany({
      take,
      where: {
        type,
      },
    });
  }
}

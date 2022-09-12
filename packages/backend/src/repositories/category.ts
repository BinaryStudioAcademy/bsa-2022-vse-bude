import type { PrismaClient } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import type { CategoryResponseDto } from '@vse-bude/shared';

export class CategoryRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(): Promise<CategoryResponseDto[]> {
    return this._dbClient.$queryRaw`
      SELECT
        "Category"."id",
        "Category"."title",
        "Category"."image",
        "Category"."createdAt",
        "Category"."updatedAt",
        CAST (
          SUM (
            CASE "Product"."status" 
              WHEN CAST(${ProductStatus.ACTIVE} AS "ProductStatus")
              THEN 1
              ELSE 0
            END ) AS INTEGER) AS "productsCount"
      FROM
        "Category"
      LEFT JOIN
        "Product"
      ON
        "Product"."categoryId" = "Category"."id"     
      GROUP BY
        "Category"."id",
        "Category"."title",
        "Category"."image",
        "Category"."createdAt",
        "Category"."updatedAt"
      `;
  }
}

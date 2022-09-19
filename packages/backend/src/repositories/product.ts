import type {
  FavoriteProducts,
  Prisma,
  PrismaClient,
  Product,
} from '@prisma/client';
import { ProductStatus, ProductType } from '@prisma/client';
import type {
  ProductQuery,
  ProductSearchQuery,
  ProductSearchResponse,
} from '@vse-bude/shared';
import type { Decimal } from '@prisma/client/runtime';
import type { ProductById } from '@types';
import { Order, ITEM_FILTER } from '@vse-bude/shared';
import { toUtc } from '@helpers';

export class ProductRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(query: ProductQuery): Promise<[Product[], number]> {
    const {
      limit = ITEM_FILTER.PRODUCT_LIMIT_DEFAULT,
      from = ITEM_FILTER.PRODUCT_FROM_DEFAULT,
      type,
      categoryId,
      priceGt = ITEM_FILTER.PRICE_GT_DEFAULT,
      priceLt = ITEM_FILTER.PRICE_LT_DEFAULT,
      sortBy = ITEM_FILTER.SORT_BY_DEFAULT,
      order = ITEM_FILTER.ORDER_DEFAULT,
    } = query;

    return this._dbClient.$transaction([
      this._dbClient.product.findMany({
        take: +limit,
        skip: +from,
        orderBy: {
          [sortBy]: order,
        },
        where: {
          type,
          categoryId,
          status: ProductStatus.ACTIVE,
          price: {
            gt: +priceGt,
            lte: +priceLt,
          },
        },
      }),
      this._dbClient.product.count({
        where: {
          type,
          categoryId,
          status: ProductStatus.ACTIVE,
          price: {
            gt: +priceGt,
            lte: +priceLt,
          },
        },
      }),
    ]);
  }

  public search({ q }: ProductSearchQuery): Promise<ProductSearchResponse[]> {
    return this._dbClient.$queryRaw`
      SELECT
        "Product"."id",
        "Product"."title"
      FROM
        "Product"
      WHERE
        (SIMILARITY("Product"."title", ${q}) > 0.2
      OR
        "Product"."title" ILIKE ${q + '%'}
      OR
        "Product"."title" ILIKE ${'%' + q + '%'})
      AND
        "Product"."status" = CAST(${ProductStatus.ACTIVE} AS "ProductStatus")
      ORDER BY
        SIMILARITY("Product"."title", ${q}) DESC
      LIMIT 10;
    `;
  }

  public getById(id: string): Promise<ProductById> {
    return this._dbClient.product.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            id: true,
            title: true,
          },
        },
        bids: true,
        author: {
          select: {
            id: true,
            phone: true,
            firstName: true,
            lastName: true,
            avatar: true,
            socialMedia: true,
          },
        },
      },
    });
  }

  public async favoriteIds(userId: string): Promise<FavoriteProducts[]> {
    return await this._dbClient.favoriteProducts.findMany({
      where: {
        userId,
      },
    });
  }

  public async getFavorite(userId: string): Promise<FavoriteProducts[]> {
    return await this._dbClient.favoriteProducts.findMany({
      where: {
        userId,
      },
      include: {
        product: {
          select: {
            title: true,
            description: true,
            price: true,
            imageLinks: true,
            status: true,
          },
        },
      },
    });
  }

  public async isInFavorite(
    userId: string,
    productId: string,
  ): Promise<FavoriteProducts> {
    return await this._dbClient.favoriteProducts.findFirst({
      where: {
        userId: userId,
        productId: productId,
      },
    });
  }

  public async addToFavorites(
    userId: string,
    productId: string,
  ): Promise<FavoriteProducts> {
    return await this._dbClient.favoriteProducts.create({
      data: {
        userId: userId,
        productId: productId,
      },
    });
  }

  public async deleteFromFavorites(
    userId: string,
    productId: string,
  ): Promise<FavoriteProducts> {
    return await this._dbClient.favoriteProducts.delete({
      where: {
        userId_productId: {
          userId: userId,
          productId: productId,
        },
      },
    });
  }

  public incrementViews(id: string): Promise<Product> {
    return this._dbClient.product.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }

  public create(data): Promise<Product> {
    return this._dbClient.product.create({
      data: {
        imageLinks: data.imageLinks,
        country: data.country,
        city: data.city,
        phone: data.phone,
        status: data.status,
        categoryId: data.category,
        title: data.title,
        description: data.description,
        authorId: data.authorId,
        type: data.type,
        price: data.price,
        minimalBid: data.minimalBid,
        recommendedPrice: data.recommendedPrice,
        endDate: data.endDate,
        postDate: data.postDate,
      },
    });
  }

  public async update(id: string, data): Promise<Product> {
    return await this._dbClient.product.update({
      where: {
        id,
      },
      data: {
        imageLinks: data.imageLinks,
        status: data.status,
        condition: data.condition,
        country: data.country,
        city: data.city,
        phone: data.phone,
        categoryId: data.category,
        title: data.title,
        description: data.description,
        type: data.type,
        price: data.price,
        minimalBid: data.minimalBid,
        recommendedPrice: data.recommendedPrice,
        endDate: data.endDate,
        postDate: data.postDate,
      },
    });
  }

  public async getCurrentPrice(productId: string): Promise<Decimal> {
    const lastBid = await this._dbClient.bid.findFirst({
      where: {
        productId: productId,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });

    if (lastBid) {
      return lastBid.price;
    }

    const product = await this._dbClient.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        price: true,
      },
    });

    return product.price;
  }

  public async checkStatus(
    id: string,
    status: ProductStatus,
  ): Promise<Product> {
    return this._dbClient.product.findFirst({
      where: {
        id,
        status,
      },
    });
  }

  public async buy(
    id: string,
    userId: string,
    status: ProductStatus,
  ): Promise<Prisma.BatchPayload> {
    return await this._dbClient.product.updateMany({
      where: {
        id,
        status: ProductStatus.ACTIVE,
      },
      data: {
        winnerId: userId,
        status,
      },
    });
  }

  public async findSimilar(
    city: string,
    categoryId: string,
    type: ProductType,
    productId: string,
  ): Promise<Product[]> {
    return await this._dbClient.product.findMany({
      where: {
        city,
        categoryId,
        type,
        status: ProductStatus.ACTIVE,
        NOT: {
          id: productId,
        },
      },
    });
  }

  public async getMostPopularLots(limit: number): Promise<Product[]> {
    return await this._dbClient.product.findMany({
      take: limit,
      where: {
        status: ProductStatus.ACTIVE,
        type: ProductType.AUCTION,
      },
      orderBy: {
        views: Order.DESC,
      },
    });
  }

  public async getMostPopularProducts(limit: number): Promise<Product[]> {
    return await this._dbClient.product.findMany({
      take: limit,
      where: {
        status: ProductStatus.ACTIVE,
        type: ProductType.SELLING,
      },
      orderBy: {
        views: Order.DESC,
      },
    });
  }

  public async getActiveAuctionsLots(): Promise<Product[]> {
    const nowUtc: Date = toUtc().toDate();

    return await this._dbClient.product.findMany({
      where: {
        type: ProductType.AUCTION,
        endDate: {
          gt: nowUtc,
        },
        participantsNotified: false,
      },
    });
  }

  public async markProductNotified(productId: string): Promise<Product> {
    return await this._dbClient.product.update({
      where: {
        id: productId,
      },
      data: {
        participantsNotified: true,
      },
    });
  }
}

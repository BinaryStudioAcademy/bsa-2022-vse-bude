import type {
  MyListRepository,
  OrderRepository,
  ProductRepository,
} from '@repositories';
import type { Item } from '@types';
import { ProductStatus } from '@prisma/client';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
  ProductStatus as ItemStatus,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';
import type { S3StorageService } from './s3-storage';

export class MyListService {
  private _myListRepository: MyListRepository;

  private _orderRepository: OrderRepository;

  private _productRepository: ProductRepository;

  private _s3StorageService: S3StorageService;

  constructor({
    myListRepository,
    orderRepository,
    s3StorageService,
    productRepository,
  }: {
    myListRepository: MyListRepository;
    orderRepository: OrderRepository;
    s3StorageService: S3StorageService;
    productRepository: ProductRepository;
  }) {
    this._myListRepository = myListRepository;
    this._orderRepository = orderRepository;
    this._s3StorageService = s3StorageService;
    this._productRepository = productRepository;
  }

  public async getPurchasedItems({
    userId,
  }: {
    userId: string;
  }): Promise<Item[]> {
    const items = await this._orderRepository.getPurchasedItems({ userId });
    if (items.length) {
      return items.map((item) => {
        const { product, updatedAt } = item;

        return {
          ...product,
          status: ItemStatus.PURCHASED,
          updatedAt,
        };
      });
    }

    return [];
  }

  public getSoldItems({ userId }: { userId: string }): Promise<Item[]> {
    return this._myListRepository.getSoldItems({ userId });
  }

  public getDraftedItems({ userId }: { userId: string }): Promise<Item[]> {
    return this._myListRepository.getDraftedItems({ userId });
  }

  public getPostedItems({ userId }: { userId: string }): Promise<Item[]> {
    return this._myListRepository.getPostedItems({ userId });
  }

  public getArchived({ userId }: { userId: string }): Promise<Item[]> {
    return this._myListRepository.getArchived({ userId });
  }

  public async addItemToPosted({
    itemId,
    postDate,
  }: {
    itemId: string;
    postDate: string;
  }): Promise<Item> {
    const item = await this._myListRepository.checkWithStatus({
      itemId,
      status: ProductStatus.ACTIVE,
    });
    if (item) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.CANCELLED_EXISTS),
      });
    }

    return this._myListRepository.postItem({ itemId, postDate });
  }

  public async addItemToArchive({
    itemId,
    updatedAt,
  }: {
    itemId: string;
    updatedAt: string;
  }): Promise<Item> {
    const item = await this._myListRepository.checkWithStatus({
      itemId,
      status: ProductStatus.CANCELLED,
    });
    if (item?.title) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.POSTED_EXISTS),
      });
    }

    return this._myListRepository.addItemToArchive({
      itemId,
      updatedAt,
    });
  }

  public async deleteProduct({
    productId,
  }: {
    productId: string;
  }): Promise<string> {
    const isSold = await this._myListRepository.checkWithStatus({
      itemId: productId,
      status: ItemStatus.SOLD,
    });
    if (isSold?.title) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.DELETE_TYPE),
      });
    }

    const isPurchased = await this._orderRepository.getPurchasedItemById({
      productId,
    });
    if (isPurchased?.product.title) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.DELETE_TYPE),
      });
    }

    const product = await this._productRepository.getById(productId);
    if (product.imageLinks.length) {
      const requests = product.imageLinks.map((link) =>
        this._s3StorageService.deleteImage(link),
      );
      Promise.all(requests);
    }

    await this._myListRepository.deleteProduct({ productId });

    return productId;
  }
}

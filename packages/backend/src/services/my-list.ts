import type { MyListRepository, OrderRepository } from '@repositories';
import type { PrismaPromise } from '@prisma/client';
import type { Item } from 'common/types/my-list-items';
import { ProductStatus } from '@prisma/client';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
  ProductStatus as ItemStatus,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export class MyListService {
  private _myListRepository: MyListRepository;

  private _orderRepository: OrderRepository;

  constructor({
    myListRepository,
    orderRepository,
  }: {
    myListRepository: MyListRepository;
    orderRepository: OrderRepository;
  }) {
    this._myListRepository = myListRepository;
    this._orderRepository = orderRepository;
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
          endDate: updatedAt,
        };
      });
    }

    return [];
  }

  public getSoldItems({ userId }: { userId: string }): PrismaPromise<Item[]> {
    return this._myListRepository.getSoldItems({ userId });
  }

  public getDraftedItems({
    userId,
  }: {
    userId: string;
  }): PrismaPromise<Item[]> {
    return this._myListRepository.getDraftedItems({ userId });
  }

  public getPostedItems({ userId }: { userId: string }): PrismaPromise<Item[]> {
    return this._myListRepository.getPostedItems({ userId });
  }

  public getArchived({ userId }: { userId: string }): PrismaPromise<Item[]> {
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
    endDate,
  }: {
    itemId: string;
    endDate: string;
  }): Promise<Item> {
    const item = await this._myListRepository.checkWithStatus({
      itemId,
      status: ProductStatus.CANCELLED,
    });
    if (item) {
      throw new ProfileError({
        status: HttpStatusCode.BAD_REQUEST,
        message: lang(UserPersonalInfoValidationMessage.POSTED_EXISTS),
      });
    }

    return this._myListRepository.addItemToArchive({
      itemId,
      endDate,
    });
  }
}

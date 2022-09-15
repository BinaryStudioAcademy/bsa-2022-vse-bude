import type { MyListRepository } from '@repositories';
import type { PrismaPromise } from '@prisma/client';
import type { Items } from 'common/types/items';
import type { SoldItems } from 'common/types/items/getItems';
import { ProductStatus } from '@prisma/client';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export class MyListService {
  private _myListRepository: MyListRepository;

  constructor({ myListRepository }: { myListRepository: MyListRepository }) {
    this._myListRepository = myListRepository;
  }

  public getPurchasedItems({ userId }: { userId: string }): Promise<object[]> {
    return this._myListRepository.getPurchasedItems({ userId });
  }

  public getSoldItems({
    userId,
  }: {
    userId: string;
  }): PrismaPromise<SoldItems[]> {
    return this._myListRepository.getSoldItems({ userId });
  }

  public getDraftedItems({ userId }: { userId: string }): Promise<Items[]> {
    return this._myListRepository.getDraftedItems({ userId });
  }

  public getPostedItems({ userId }: { userId: string }): Promise<Items[]> {
    return this._myListRepository.getPostedItems({ userId });
  }

  public getArchived({ userId }: { userId: string }): Promise<Items[]> {
    return this._myListRepository.getArchived({ userId });
  }

  public async addItemToPosted({
    itemId,
    postDate,
  }: {
    itemId: string;
    postDate: string;
  }): Promise<Items> {
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
    cancelReason,
    endDate,
  }: {
    itemId: string;
    cancelReason: string | null;
    endDate: string;
  }): Promise<Items> {
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
      cancelReason,
      endDate,
    });
  }
}

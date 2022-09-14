import type { MyListRepository } from '@repositories';
import type { PrismaPromise } from '@prisma/client';
import type { Items } from 'common/types/items';
import type { SoldItems } from 'common/types/items/getItems';

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
}

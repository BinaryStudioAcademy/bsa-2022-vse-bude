import type { MyListRepository } from '@repositories';
import type { Product } from '@prisma/client';

export class MyListService {
  private _myListRepository: MyListRepository;

  constructor({ myListRepository }: { myListRepository: MyListRepository }) {
    this._myListRepository = myListRepository;
  }

  public getPurchasedItems({ userId }: { userId: string }) : Promise<object[]> {
    return this._myListRepository.getPurchasedItems({ userId });
  }

  public getSoldItems({ userId }: { userId: string }) : Promise<Product[]> {
    return this._myListRepository.getSoldItems({ userId });
  }

  public getDraftedItems({ userId }: { userId: string }) : Promise<Product[]> {
    return this._myListRepository.getDraftedItems({ userId });
  }

  public getPostedItems({ userId }: { userId: string }) : Promise<Product[]> {
    return this._myListRepository.getPostedItems({ userId });
  }

  public getArchived({ userId }: { userId: string }) : Promise<Product[]> {
    return this._myListRepository.getArchived({ userId });
  }
}

import type { MyListRepository } from '@repositories';

export class MyListService {
  private _myListRepository: MyListRepository;

  constructor({ myListRepository }: { myListRepository: MyListRepository }) {
    this._myListRepository = myListRepository;
  }

  public getPurchasedItems({ userId }: { userId: string }) {
    return this._myListRepository.getPurchasedItems({ userId });
  }

  public getSoldItems({ userId }: { userId: string }) {
    return this._myListRepository.getSoldItems({ userId });
  }

  public getDraftedItems({ userId }: { userId: string }) {
    return this._myListRepository.getDraftedItems({ userId });
  }

  public getPostedItems({ userId }: { userId: string }) {
    return this._myListRepository.getPostedItems({ userId });
  }

  public getCancelled({ userId }: { userId: string }) {
    return this._myListRepository.getCancelled({ userId });
  }
}

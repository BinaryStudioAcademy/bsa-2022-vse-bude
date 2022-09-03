import type { MyListRepository } from '@repositories';

export class MyListService {
  private _myListRepository: MyListRepository;

  constructor({ myListRepository }: { myListRepository: MyListRepository }) {
    this._myListRepository = myListRepository;
  }

  public async getPurchasedItems({ userId }: { userId: string }) {
    return this._myListRepository.getPurchasedItems({ userId });
  }

  public async getSoldItems({ userId }: { userId: string }) {
    return this._myListRepository.getSoldItems({ userId });
  }

  public async getDraftedItems({ userId }: { userId: string }) {
    return this._myListRepository.getDraftedItems({ userId });
  }

  public async getPostedItems({ userId }: { userId: string }) {
    return this._myListRepository.getPostedItems({ userId });
  }
}

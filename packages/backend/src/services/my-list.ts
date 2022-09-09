import type { MyListRepository } from '@repositories';
import type { MyListItem } from '@vse-bude/shared';

export class MyListService {
  private _myListRepository: MyListRepository;

  constructor({ myListRepository }: { myListRepository: MyListRepository }) {
    this._myListRepository = myListRepository;
  }

  public async getAllUserItems({ userId }: { userId: string }): Promise<MyListItem> {
    return this._myListRepository.getAllUserItems({ userId });
  }
}

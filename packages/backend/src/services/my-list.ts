import type { MyListRepository } from '@repositories';

export class MyListService {
  private _myListRepository: MyListRepository;

  constructor({ myListRepository }: { myListRepository: MyListRepository }) {
    this._myListRepository = myListRepository;
  }

  public async getAllUserItems({
    userId,
  }: {
    userId: string;
  }): Promise<object[]> {
    return this._myListRepository.getAllUserItems({ userId });
  }
}

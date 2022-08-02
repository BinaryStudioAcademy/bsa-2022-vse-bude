import type { RandomDataRepository } from '@repositories';

export class RandomDataService {
  private _randomDataRepository: RandomDataRepository;

  constructor(randomDataRepository: RandomDataRepository) {
    this._randomDataRepository = randomDataRepository;
  }

  public get() {
    return this._randomDataRepository.get();
  }
}

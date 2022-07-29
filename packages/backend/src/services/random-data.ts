import type { RandomDataRepository } from 'data/repositories/random-data';

export class RandomDataService {
  private _randomDataRepository: RandomDataRepository;

  constructor(randomDataRepository: RandomDataRepository) {
    this._randomDataRepository = randomDataRepository;
  }

  public get() {
    return this._randomDataRepository.get();
  }
}

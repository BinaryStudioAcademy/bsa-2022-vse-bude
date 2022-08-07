import fetch from 'node-fetch';

export class RandomDataRepository {
  public get() {
    return fetch('https://baconipsum.com/api/?type=meat-and-filler').then((res) => res.json());
  }
}

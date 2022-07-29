import fetch from 'node-fetch';

export class RandomDataRepository {
  public get() {
    return fetch('https://random-data-api.com/api/address/random_address').then((res) =>
      res.json()
    );
  }
}

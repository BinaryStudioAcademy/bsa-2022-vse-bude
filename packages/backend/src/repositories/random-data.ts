import fetch from 'node-fetch';

export class RandomDataRepository {
  public get() {
    return fetch('https://dad-jokes.p.rapidapi.com/random/joke').then((res) => res.json());
  }
}

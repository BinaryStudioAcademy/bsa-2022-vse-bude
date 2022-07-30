import type { DBClient } from '@helpers';

export class UserRepository {
  private _bdClient: DBClient;

  constructor(bdClient: DBClient) {
    this._bdClient = bdClient;
  }

  public getAll() {
    return this._bdClient.user.findMany();
  }
}

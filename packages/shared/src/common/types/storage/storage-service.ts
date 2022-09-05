import type { IAuthHelper } from '../auth';
import type { ILocaleHelper } from '../locale';

export interface IStorageService {
  _auth: IAuthHelper | null;
  _locale: ILocaleHelper | null;
}

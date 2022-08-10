import { createHmac, pbkdf2Sync, randomBytes } from 'crypto';

export class HashService {
  private _salt = 'sha256';

  private _iterations = 100;

  private _algorithm = 'sha256';

  private _keylen = 32;

  generatePasswordHash(password: string): string {
    return pbkdf2Sync(
      password,
      this._salt,
      this._iterations,
      this._keylen,
      this._algorithm,
    ).toString('hex');
  }

  verifyPasswordHash(passwordHash: string, password: string): boolean {
    const hash = this.generatePasswordHash(password);

    return passwordHash === hash;
  }

  generateRefreshToken(): string {
    return createHmac(this._algorithm, randomBytes(64).toString('hex')).digest(
      'hex',
    );
  }
}

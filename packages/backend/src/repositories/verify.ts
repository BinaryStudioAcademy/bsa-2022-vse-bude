import type { SaveVerifyCode } from '../common/types/verification-code';
import { BaseRepository } from './base';

export class VerifyRepository extends BaseRepository {
  getUserCodeByTypeAndCode(userId: string, type: 'PHONE' | 'EMAIL', code: string) {
    return this._dbClient.verificationCode.findFirst({
      where: {
        AND: [
          {
            userId: userId,
          },
          {
            type: type
          },
          {
            code: code
          }
        ]
      }
    });
  }

  deleteByType(userId: string, type: 'PHONE' | 'EMAIL') {
    return this._dbClient.verificationCode.deleteMany({
      where: {
        AND: [
          {
            userId: userId
          },
          {
            type: type
          }
        ]
      },
    });
  }

  async save(data: SaveVerifyCode) {
    return await this._dbClient.verificationCode.create({
      data: {
        userId: data.userId,
        type: data.type,
        code: data.code
      }
    });
  }
}

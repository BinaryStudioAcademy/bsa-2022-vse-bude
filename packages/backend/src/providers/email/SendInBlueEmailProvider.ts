import { getEnv } from '@helpers';
import type { IEmailProvider } from 'common/types/providers/IEmailProvider';
import type { SendSmtpEmail } from 'sib-api-v3-typescript';
import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from 'sib-api-v3-typescript';

export class SendInBlueEmailProvider implements IEmailProvider {
  private _apiInstance = new TransactionalEmailsApi();

  constructor() {
    this._apiInstance.setApiKey(
      TransactionalEmailsApiApiKeys.apiKey,
      getEnv('EMAIL_SERVICE_API_KEY'),
    );
  }

  public async send(options: SendSmtpEmail) {
    return await this._apiInstance.sendTransacEmail(options);
  }
}

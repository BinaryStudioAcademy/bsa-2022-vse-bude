import { getEnv } from '@helpers';
import type { EmailOptions, IEmailProvider } from '@types';
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

  public async send(options: EmailOptions): Promise<void> {
    await this._apiInstance.sendTransacEmail({
      subject: options.subject,
      sender: options.from,
      to: options.to,
      replyTo: options.replyTo,
      textContent: options.text,
      htmlContent: options.html,
      bcc: options.bcc,
      cc: options.cc,
    });
  }
}

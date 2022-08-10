import { TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from 'sib-api-v3-typescript';
import { SendSmtpEmail as ISendSmtEmail } from 'sib-api-v3-typescript'
import { getEnv } from '@helpers';

export class MailerRepository {
    private _apiInstance = new TransactionalEmailsApi();

    constructor() {
        this._apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, getEnv('EMAIL_SERVICE_API_KEY'));
    }

    public async send(options: ISendSmtEmail) {
        return await this._apiInstance.sendTransacEmail(options);
    }
}
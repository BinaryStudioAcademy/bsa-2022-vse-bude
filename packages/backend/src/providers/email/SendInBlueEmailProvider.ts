import { getEnv } from "@helpers";
import { IEmailProvider } from "common/types/providers/IEmailProvider";
import { TransactionalEmailsApi, TransactionalEmailsApiApiKeys, SendSmtpEmail } from "sib-api-v3-typescript";

export class SendInBlueEmailProvider implements IEmailProvider {
    private _apiInstance = new TransactionalEmailsApi();

    constructor() {
        this._apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, getEnv('EMAIL_SERVICE_API_KEY'));
    }

    public async send(options: SendSmtpEmail) {
        return await this._apiInstance.sendTransacEmail(options);
    }
}

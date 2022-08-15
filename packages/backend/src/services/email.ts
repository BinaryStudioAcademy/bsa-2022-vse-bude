import { log } from '@helpers';
import { IEmailProvider } from '@types';
import { SendSmtpEmail } from 'sib-api-v3-typescript';

export class EmailService {
    private _emailProvider: IEmailProvider;

    constructor(emailProvider: IEmailProvider) {
        this._emailProvider = emailProvider;
    }

    public async send(options: SendSmtpEmail) {
        try {
            return await this._emailProvider.send(options);
        } catch (error) {
            log(error);
        }
    }
}

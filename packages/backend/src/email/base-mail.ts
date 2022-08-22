import type { EmailOptions } from '@types';
import { getEnv } from '@helpers';
import type { EmailService } from '../services/email/email';
import { emailService } from '../services/email';
import type { MailInterface } from './mail-interface';

export class BaseMail implements MailInterface {
  protected _mailService: EmailService;

  protected _options: EmailOptions;

  constructor() {
    this._mailService = emailService;
    this.setOptions();
  }

  async send() {
    await this._mailService.send(this._options);
  }

  setTo(emailTo: string, name?: string) {
    this._options.to.push({
      email: emailTo,
      name,
    });

    return this;
  }

  setText(text: string) {
    this._options.text = text;

    return this;
  }

  setHtml(htmlTemplate: string) {
    this._options.html = htmlTemplate;

    return this;
  }

  protected setOptions(): void {
    this._options = {
      subject: '',
      from: {
        email: getEnv('APP_EMAIL_FROM'),
        name: getEnv('APP_NAME'),
      },
    };
  }
}

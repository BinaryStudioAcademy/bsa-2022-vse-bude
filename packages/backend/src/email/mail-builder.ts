import type { EmailOptions } from '@types';
import { getEnv } from '@helpers';
import { defaultEmailOptions } from '@types';
import { type EmailService } from '@services';
import type { IMailBuilder } from '../common/types/email/mail-builder-interface';

export class MailBuilder implements IMailBuilder {
  protected _mailService: EmailService;

  protected _options: EmailOptions;

  constructor(emailService: EmailService) {
    this._mailService = emailService;
    this.setOptions();
  }

  async send(): Promise<void> {
    await this._mailService.send(this._options);
  }

  setTo(emailTo: string, name?: string): this {
    this._options.to = [{ email: emailTo, name }];

    return this;
  }

  setText(text: string): this {
    this._options.text = text;

    return this;
  }

  setHtml(htmlTemplate: string): this {
    this._options.html = htmlTemplate;

    return this;
  }

  protected setOptions(): void {
    this._options = {
      ...defaultEmailOptions,
      subject: '',
      from: {
        email: getEnv('APP_EMAIL_FROM'),
        name: getEnv('APP_NAME'),
      },
    };
  }
}

import { logger } from '@helpers';
import type { EmailOptions, IEmailProvider } from '@types';

export class EmailService {
  private _emailProvider: IEmailProvider;

  constructor(emailProvider: IEmailProvider) {
    this._emailProvider = emailProvider;
  }

  public async send(options: EmailOptions): Promise<void> {
    try {
      await this._emailProvider.send(options);
    } catch (error) {
      logger.error(error.response.body);
    }
  }
}

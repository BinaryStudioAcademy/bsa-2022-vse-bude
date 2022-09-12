import { getEnv } from '@helpers';
import { defaultEmailOptions } from '@types';
import { MailBuilder } from './mail-builder';

export class ResetPasswordMailBuilder extends MailBuilder {
  protected setOptions(): void {
    this._options = {
      ...this._options,
      ...defaultEmailOptions,
      subject: `Reset Password | ${getEnv('APP_NAME')}`,
    };
  }

  setText(text: string): this {
    const resetMessage = `Link for resetting password: ${text}`;

    return super.setText(resetMessage);
  }
}

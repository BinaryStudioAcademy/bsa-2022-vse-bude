import { getEnv } from '@helpers';
import { defaultEmailOptions } from '@types';
import { BaseMail } from './base-mail';

export class ResetPasswordMail extends BaseMail {
  protected setOptions() {
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

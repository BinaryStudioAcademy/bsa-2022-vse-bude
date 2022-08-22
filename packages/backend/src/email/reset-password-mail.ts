import { getEnv } from '@helpers';
import { BaseMail } from './base-mail';

export class ResetPasswordMail extends BaseMail {
  protected setOptions() {
    this._options = {
      subject: `Reset Password | ${getEnv('APP_NAME')}`,
    };
  }

  setText(text: string): this {
    const resetMessage = `Link for resetting password: ${text}`;

    return super.setText(resetMessage);
  }
}

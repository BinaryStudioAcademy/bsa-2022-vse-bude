import type { EmailOptions } from '@types';

export interface IEmailProvider {
  send(options: EmailOptions): Promise<void>;
}

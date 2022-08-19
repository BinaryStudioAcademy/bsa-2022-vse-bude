import { logger } from '@helpers';
import type { ISMSProvider } from '@types';

export class BarSMSProvider implements ISMSProvider {
  send(phone: string, message: string): Promise<boolean> {
    const result = Promise.resolve(true);
    logger.log(`Sending message to ${phone}: ${message}`);

    return result;
  }

  getById(id: string): Promise<object> {
    const result = Promise.resolve({
      id,
    });

    return result;
  }
}

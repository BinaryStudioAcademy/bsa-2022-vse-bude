import { logger } from '@helpers';
import type { ISMSProvider } from '@types';
import type { ISMSSenderService } from '@types';

class SMSSenderService implements ISMSSenderService {
  private providerService: ISMSProvider;

  constructor(providerService: ISMSProvider) {
    this.providerService = providerService;
  }

  /**
   * It sends a message to a phone number
   * @param {string} phone - The phone number to send the message to.
   * @param {string} message - The message you want to send.
   * @returns The result of the send method from the provider service.
   */
  public async send(phone: string, message: string): Promise<boolean> {
    try {
      return await this.providerService.send(phone, String(message));
    } catch (error) {
      logger.error(error);
    }
  }

  /**
   * It gets a sent message by it's id
   * @param {string} id - The id of the message to get.
   * @returns The result of the getById method from the providerService.
   */
  public async getById(id: string): Promise<object> {
    try {
      return await this.providerService.getById(id);
    } catch (error) {
      logger.error(error);
    }
  }
}

export { SMSSenderService };

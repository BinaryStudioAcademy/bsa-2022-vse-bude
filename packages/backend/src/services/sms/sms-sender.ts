import { log } from '@helpers';
import type { ISMSProvider } from '@providers';

export interface ISMSSenderService {
  send(phone: string, message: string): Promise<object>;
  getById(id: string): Promise<object>;
}

class SMSSenderService implements ISMSSenderService {
  private providerService: ISMSSenderService;

  constructor(providerService: ISMSProvider) {
    this.providerService = providerService;
  }

  /**
   * It sends a message to a phone number
   * @param {string} phone - The phone number to send the message to.
   * @param {string} message - The message you want to send.
   * @returns The result of the send method from the provider service.
   */
  public async send(phone: string, message: string): Promise<object> {
    try {
      const result = await this.providerService.send(phone, String(message));

      return result;
    } catch (error) {
      log(error);
    }
  }

  /**
   * It gets a sent message by it's id
   * @param {string} id - The id of the message to get.
   * @returns The result of the getById method from the providerService.
   */
  public async getById(id: string): Promise<object> {
    try {
      const result = await this.providerService.getById(id);

      return result;
    } catch (error) {
      log(error);
    }
  }
}

export { SMSSenderService };

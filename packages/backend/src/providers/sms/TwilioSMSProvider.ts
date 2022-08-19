import { getEnv, logger } from '@helpers';
import { Twilio } from 'twilio';
import type { ISMSProvider } from '@types';
import { MessageStatus } from '@enums';

export class TwilioSMSProvider implements ISMSProvider {
  private authToken: string;

  private accountSid: string;

  private messagingServiceSid: string;

  private client: Twilio;

  constructor() {
    this.accountSid = getEnv('TWILIO_ACCOUNT_SID');
    this.authToken = getEnv('TWILIO_AUTH_TOKEN');
    this.messagingServiceSid = getEnv('TWILIO_MESSAGING_SERVICE_SID');
    this.client = new Twilio(this.accountSid, this.authToken);
  }

  /**
   * It sends a message to a phone number using the Twilio API
   * @param {string} phone - The phone number to send the message to.
   * @param {string} message - The message you want to send.
   * @returns The result of the send function is an object.
   */
  public async send(phone: string, message: string): Promise<boolean> {
    try {
      const result = await this.client.messages.create({
        body: message,
        messagingServiceSid: this.messagingServiceSid,
        to: phone,
      });

      return result.status === MessageStatus.ACCEPTED;
    } catch (error) {
      logger.error(error);
    }
  }

  /**
   * It fetches a message by its ID
   * @param {string} id - The id of the message you want to retrieve.
   * @returns The result of the fetch method.
   */
  public async getById(id: string): Promise<object> {
    try {
      const result = await this.client.messages(id).fetch();

      return result;
    } catch (error) {
      logger.error(error);
    }
  }
}

import { Twilio } from 'twilio';
import type { ISMSSenderService } from './sms-sender';

export interface ITwilioOptions {
  accountSid: string;
  authToken: string;
  messagingServiceSid: string;
}

export class TwilioService implements ISMSSenderService, ITwilioOptions {
  public authToken: ITwilioOptions['authToken'];

  public accountSid: ITwilioOptions['accountSid'];

  public messagingServiceSid: ITwilioOptions['messagingServiceSid'];

  private client: Twilio;

  constructor(options: ITwilioOptions) {
    this.accountSid = options.accountSid;
    this.authToken = options.authToken;
    this.messagingServiceSid = options.messagingServiceSid;
    this.client = new Twilio(this.accountSid, this.authToken);
  }

  /**
   * It sends a message to a phone number using the Twilio API
   * @param {string} phone - The phone number to send the message to.
   * @param {string} message - The message you want to send.
   * @returns The result of the send function is an object.
   */
  public async send(phone: string, message: string): Promise<object> {
    try {
      const result = await this.client.messages.create({
        body: message,
        messagingServiceSid: this.messagingServiceSid,
        to: phone,
      });

      return result;
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  }
}

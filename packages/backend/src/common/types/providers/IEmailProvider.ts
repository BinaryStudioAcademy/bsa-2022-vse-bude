import type { SendSmtpEmail, CreateSmtpEmail } from 'sib-api-v3-typescript';
import type { IncomingMessage } from 'http';

export interface IEmailProvider {
  send(
    options: SendSmtpEmail,
  ): Promise<{ response: IncomingMessage; body: CreateSmtpEmail }>;
}

import { IncomingMessage } from "http";
import { SendSmtpEmail, CreateSmtpEmail } from "sib-api-v3-typescript"

export interface IEmailProvider {
    send(options: SendSmtpEmail): Promise<{ response: IncomingMessage; body: CreateSmtpEmail; }>;
}

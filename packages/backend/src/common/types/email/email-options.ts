interface IEmail {
  email: string;
  name?: string;
}

export interface EmailOptions {
  to?: Array<IEmail>;
  from?: IEmail;
  subject: string;
  text?: string;
  html?: string;
  bcc?: Array<IEmail>;
  cc?: Array<IEmail>;
  replyTo?: IEmail;
}

export interface Mailable {
  send(): void;
  setTo(emailTo: string, name?: string): this;
  setText(text: string): this;
  setHtml(htmlTemplate: string): this;
}

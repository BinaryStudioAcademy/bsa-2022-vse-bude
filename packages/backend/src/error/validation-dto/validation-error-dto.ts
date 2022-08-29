export class ValidationError {
  key: string;
  message: string;
  constructor({ key, message }: { key: string; message: string }) {
    this.key = key;
    this.message = message;
  }
}

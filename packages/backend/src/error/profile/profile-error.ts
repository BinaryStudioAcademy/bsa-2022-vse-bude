import type { HttpStatusCode } from '@vse-bude/shared';
import { HttpError } from '@vse-bude/shared';

export class ProfileError extends HttpError {
  key: string;

  constructor({
    status,
    message,
  }: {
    status: HttpStatusCode;
    message: string;
  }) {
    super({
      status,
      message,
    });
    this.status = status;
    this.message = message;
  }
}

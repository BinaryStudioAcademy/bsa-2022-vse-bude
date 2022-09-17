import { ExceptionName } from '../../common/enums';

const DEFAULT_MESSAGE = 'Unauthorized user.';

class CredentialsError extends Error {
  public constructor(message = DEFAULT_MESSAGE) {
    super(message);
    this.name = ExceptionName.INVALID_CREDENTIALS;
  }
}

export { CredentialsError };

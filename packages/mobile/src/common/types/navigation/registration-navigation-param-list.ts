import { RegistrationScreenName } from '~/common/enums/enums';

type RegistrationNavigationParamList = {
  [RegistrationScreenName.WELCOME]: undefined;
  [RegistrationScreenName.SIGN_IN]: undefined;
  [RegistrationScreenName.SIGN_UP]: undefined;
  [RegistrationScreenName.FORGOT_PASSWORD]: undefined;
};

export type { RegistrationNavigationParamList };

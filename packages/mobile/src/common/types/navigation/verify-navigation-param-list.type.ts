import { VerifyScreenName } from '~/common/enums/enums';

type VerifyNavigationParamList = {
  [VerifyScreenName.VERIFY_PHONE]: undefined;
  [VerifyScreenName.VERIFY_CODE]: undefined;
  [VerifyScreenName.VERIFIED]: undefined;
};

export type { VerifyNavigationParamList };

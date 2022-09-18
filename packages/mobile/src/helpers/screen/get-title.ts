import { MainScreenName, RootScreenName } from '~/common/enums/enums';
import { t } from 'i18next';

const getTitle = (screenName: RootScreenName | MainScreenName) => {
  switch (screenName) {
    case RootScreenName.SIGN_UP:
      return t('verification.SIGN_UP');
    case RootScreenName.SIGN_IN:
      return t('verification.SIGN_IN');
    case RootScreenName.FORGOT_PASSWORD:
      return t('verification.FORGOT_PASSWORD');
    case RootScreenName.ITEMS_AND_SERVICES: {
      return t('items_and_services.TITLE');
    }
  }
};

export { getTitle };

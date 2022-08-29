import * as Joi from 'joi';
import i18next from 'i18next';
import { SPECIAL_SYMBOLS_REGEX } from '~/common/regexp/regexp';

const nameValidator =
  (prefix: string) => (value: string, helpers: Joi.CustomHelpers) => {
    if (value.length < 1) {
      return helpers.message({
        custom: i18next.t('errors.MIN_NAME_LENGTH', {
          name: i18next.t('words.' + prefix),
        }),
      });
    }

    if (value.length > 40) {
      return helpers.message({
        custom: i18next.t('errors.MIN_NAME_LENGTH', {
          name: i18next.t('words.' + prefix),
        }),
      });
    }

    if (value.match(SPECIAL_SYMBOLS_REGEX)) {
      return helpers.message({
        custom: i18next.t(`errors.${prefix}_INVALID`),
      });
    }

    if (value.match(/^-|-$/)) {
      return helpers.message({
        custom: i18next.t(`errors.${prefix}_INVALID`),
      });
    }

    return value;
  };

export { nameValidator };

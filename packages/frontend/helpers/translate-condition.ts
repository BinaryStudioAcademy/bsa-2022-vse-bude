import type { TFunction } from 'next-i18next';
import type { Condition } from '@vse-bude/shared';

export const translateCondition = (t: TFunction, condition: Condition) =>
  ({
    'NEW': t('item:condition.NEW'),
    'USED': t('item:condition.USED'),
  }[condition]);

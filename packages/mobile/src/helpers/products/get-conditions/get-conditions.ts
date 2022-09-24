import { TFunction } from 'i18next';
import { Condition } from '@vse-bude/shared';

type ConditionType = Record<string, string>[];

const getConditions = (t: TFunction): ConditionType => {
  return [
    { label: t('make_a_post.NEW'), value: Condition.NEW },
    { label: t('make_a_post.USED'), value: Condition.USED },
  ];
};

export { getConditions };

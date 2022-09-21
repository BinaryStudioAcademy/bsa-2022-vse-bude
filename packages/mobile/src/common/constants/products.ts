import i18next from 'i18next';
import { Condition } from '@vse-bude/shared';

const CONDITION = [
  { label: i18next.t('make_a_post.NEW'), value: Condition.NEW },
  { label: i18next.t('make_a_post.USED'), value: Condition.USED },
];

export { CONDITION };

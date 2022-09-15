import i18next from 'i18next';
import { Condition } from '@vse-bude/shared';

export const CURRENCY = [
  { label: 'UAH', value: 'UAH' },
  { label: 'USD', value: 'USD' },
];

export const COUNTRIES = [
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'Poland', value: 'Poland' },
  { label: 'France', value: 'France' },
  { label: 'Czech', value: 'Czech' },
  { label: 'Great Britain', value: 'Great Britain' },
];

export const CITIES = [
  { label: 'Little Whinging', value: 'Little Whinging' },
  { label: 'Kharkiv', value: 'Kharkiv' },
  { label: 'Lviv', value: 'Lviv' },
  { label: 'Kyiv', value: 'Kyiv' },
  { label: 'Odessa', value: 'Odessa' },
];

export const CALLING_CODE = [
  { label: 'UA', value: 'UA' },
  { label: 'PL', value: 'PL' },
];

export const CONDITION = [
  { label: i18next.t('make_a_post.NEW'), value: Condition.NEW },
  { label: i18next.t('make_a_post.USED'), value: Condition.USED },
];

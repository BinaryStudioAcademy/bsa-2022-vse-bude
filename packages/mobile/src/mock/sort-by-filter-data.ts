import { t } from 'i18next';
import { SortBy } from '@vse-bude/shared';

const sortByFilterData = [
  { label: t('filter.BY_DATE'), value: SortBy.DATE },
  { label: t('filter.BY_PRICE'), value: SortBy.PRICE },
  { label: t('filter.BY_VIEWS'), value: SortBy.VIEWS },
];

export { sortByFilterData };

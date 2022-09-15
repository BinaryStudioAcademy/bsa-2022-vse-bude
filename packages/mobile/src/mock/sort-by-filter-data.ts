import { t } from 'i18next';
import { FilterSortBy } from '~/common/enums/enums';

const sortByFilterData = [
  {
    label: t('filter.CHEAP_TO_EXPANSIVE'),
    value: FilterSortBy.CHEAP_TO_EXPANSIVE,
  },
  {
    label: t('filter.EXPANSIVE_TO_CHEAP'),
    value: FilterSortBy.EXPANSIVE_TO_CHEAP,
  },
  { label: t('filter.NEW_TO_OLD'), value: FilterSortBy.NEW_TO_OLD },
  { label: t('filter.OLD_TO_NEW'), value: FilterSortBy.OLD_TO_NEW },
  { label: t('filter.MOST_VIEWS'), value: FilterSortBy.MOST_VIEWS },
  { label: t('filter.LEAST_VIEWS'), value: FilterSortBy.LEAST_VIEWS },
];

export { sortByFilterData };

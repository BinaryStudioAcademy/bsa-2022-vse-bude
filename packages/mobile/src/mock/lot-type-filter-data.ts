import { t } from 'i18next';
import { FilterLotType } from '~/common/enums/enums';

const lotTypeFilterData = [
  { name: FilterLotType.ALL, title: t('filter.ALL') },
  { name: FilterLotType.SELLING, title: t('filter.FIXED_PRICE') },
  { name: FilterLotType.AUCTION, title: t('filter.AUCTION') },
];
export { lotTypeFilterData };

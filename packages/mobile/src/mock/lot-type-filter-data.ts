import { ProductType } from '@vse-bude/shared';
import { t } from 'i18next';

const lotTypeFilterData = [
  { name: undefined, title: t('filter.ALL') },
  { name: ProductType.SELLING, title: t('filter.FIXED_PRICE') },
  { name: ProductType.AUCTION, title: t('filter.AUCTION') },
];
export { lotTypeFilterData };

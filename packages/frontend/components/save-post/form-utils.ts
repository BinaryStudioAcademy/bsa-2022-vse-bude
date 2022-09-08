import type { IPostForms, ICreateAuction } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';
import type { SellerFieldsType } from './types';

export const initialProductFormState: IPostForms = {
  category: '',
  condition: '',
  title: '',
  description: '',
  price: 0,
  currency: 'UAH',
  country: '',
  city: '',
  instagram: '',
  facebook: '',
  site: '',
  phone: '',
  callingCode: '',
};

export const initialAuctionFormState: ICreateAuction = {
  category: '',
  condition: '',
  title: '',
  description: '',
  recommendedPrice: 0,
  minimalBid: 0,
  minimalBidCurrency: 'UAH',
  recommendedPriceCurrency: 'UAH',
  currency: 'UAH',
  country: '',
  city: '',
  instagram: '',
  facebook: '',
  site: '',
  phone: '',
  callingCode: '',
  endDate: '',
};

export const SellerFields = (t: TFunction): SellerFieldsType => ({
  USER: {
    value: 'CURRENT_USER',
    title: t('create-post:sellerSelect.currentUser'),
  },
  OTHER: {
    value: 'OTHER',
    title: t('create-post:sellerSelect.otherUser'),
  },
});

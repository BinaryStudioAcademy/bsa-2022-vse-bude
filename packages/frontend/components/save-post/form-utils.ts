import type { IPostForms, ICreateAuction } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';
import type { SellerFieldsType } from './types';

export const initialProductFormState: IPostForms = {
  category: '',
  title: '',
  description: '',
  price: '',
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
  title: '',
  description: '',
  recommendedPrice: '',
  minimalBid: '',
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

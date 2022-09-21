import type { IPostForms, ICreateAuction } from '@vse-bude/shared';
import { Condition } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';
import { translateCondition } from 'helpers/translate-condition';
import type { SellerFieldsType, ConditionFieldsType } from './types';

export const initialProductFormState: IPostForms = {
  category: '',
  condition: '',
  title: '',
  description: '',
  price: null,
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
  recommendedPrice: null,
  minimalBid: null,
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

export const ConditionFields = (t: TFunction): ConditionFieldsType => ({
  [Condition.NEW]: {
    value: 'NEW',
    title: translateCondition(t, Condition.NEW),
  },
  [Condition.USED]: {
    value: 'USED',
    title: translateCondition(t, Condition.USED),
  },
});

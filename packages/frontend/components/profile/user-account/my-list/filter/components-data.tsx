import type { TFunction } from 'next-i18next';
import { ProductType } from '@vse-bude/shared';
import type { Dispatch } from '@reduxjs/toolkit';
import { filterByType, resetStatuses, filterByStatus } from '@store';
import type { FilterButtonProps, CheckboxProps, FilterStatuses } from './types';

export const filterButtons = ({
  t,
  dispatch,
}: {
  t: TFunction;
  dispatch: Dispatch;
}): FilterButtonProps[] => [
  {
    name: t('my-list:filter.button.all'),
    onClick: () => dispatch(filterByType('')),
  },
  {
    name: t('my-list:filter.button.fixedPrice'),
    onClick: () => dispatch(filterByType(ProductType.SELLING)),
  },
  {
    name: t('my-list:filter.button.auction'),
    onClick: () => dispatch(filterByType(ProductType.AUCTION)),
  },
];

export const checkboxes = ({
  t,
  dispatch,
  statusesValue,
}: {
  t: TFunction;
  dispatch: Dispatch;
  statusesValue: FilterStatuses;
}): CheckboxProps[] => [
  {
    label: t('my-list:filter.checkbox.all'),
    value: statusesValue.all,
    onChange: () => {
      dispatch(resetStatuses());
    },
  },
  {
    label: t('my-list:filter.checkbox.purchased'),
    value: statusesValue.purchased,
    onChange: () => {
      dispatch(filterByStatus('purchased'));
    },
  },
  {
    label: t('my-list:filter.checkbox.sold'),
    value: statusesValue.sold,
    onChange: () => {
      dispatch(filterByStatus('sold'));
    },
  },
  {
    label: t('my-list:filter.checkbox.posted'),
    value: statusesValue.posted,
    onChange: () => {
      dispatch(filterByStatus('posted'));
    },
  },
  {
    label: t('my-list:filter.checkbox.drafts'),
    value: statusesValue.draft,
    onChange: () => {
      dispatch(filterByStatus('draft'));
    },
  },
  {
    label: t('my-list:filter.checkbox.archived'),
    value: statusesValue.archived,
    onChange: () => {
      dispatch(filterByStatus('archived'));
    },
  },
];

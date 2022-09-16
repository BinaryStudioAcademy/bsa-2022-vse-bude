import type { TFunction } from 'next-i18next';
import { ProductType } from '@vse-bude/shared';
import type { Dispatch } from '@reduxjs/toolkit';
import { filterByType, resetStatuses, filterByStatus } from '@store';
import type { FilterButtonProps, CheckboxProps, FilterStatuses } from './types';

export const ALL = 'ALL';

export const filterButtons = ({
  t,
  dispatch,
}: {
  t: TFunction;
  dispatch: Dispatch;
}): FilterButtonProps[] => [
  {
    name: 'ALL',
    text: t('my-list:filter.button.all'),
    onClick: () =>
      dispatch(
        filterByType({
          typeName: '',
          typeValue: t('my-list:filter.button.all'),
        }),
      ),
  },
  {
    name: 'SELLING',
    text: t('my-list:filter.button.fixedPrice'),
    onClick: () =>
      dispatch(
        filterByType({
          typeName: ProductType.SELLING,
          typeValue: t('my-list:filter.button.fixedPrice'),
        }),
      ),
  },
  {
    name: 'AUCTION',
    text: t('my-list:filter.button.auction'),
    onClick: () =>
      dispatch(
        filterByType({
          typeName: ProductType.AUCTION,
          typeValue: t('my-list:filter.button.auction'),
        }),
      ),
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
    type: 'status',
    onChange: () => {
      dispatch(resetStatuses(t('my-list:filter.badges.allTypes')));
    },
  },
  {
    label: t('my-list:filter.checkbox.purchased'),
    value: statusesValue.purchased,
    type: 'status',
    onChange: () => {
      dispatch(
        filterByStatus({
          statusName: 'purchased',
          statusValue: t('my-list:filter.checkbox.purchased'),
        }),
      );
    },
  },
  {
    label: t('my-list:filter.checkbox.sold'),
    value: statusesValue.sold,
    type: 'status',
    onChange: () => {
      dispatch(
        filterByStatus({
          statusName: 'sold',
          statusValue: t('my-list:filter.checkbox.sold'),
        }),
      );
    },
  },
  {
    label: t('my-list:filter.checkbox.posted'),
    value: statusesValue.posted,
    type: 'status',
    onChange: () => {
      dispatch(
        filterByStatus({
          statusName: 'posted',
          statusValue: t('my-list:filter.checkbox.posted'),
        }),
      );
    },
  },
  {
    label: t('my-list:filter.checkbox.drafts'),
    value: statusesValue.draft,
    type: 'status',
    onChange: () => {
      dispatch(
        filterByStatus({
          statusName: 'draft',
          statusValue: t('my-list:filter.checkbox.drafts'),
        }),
      );
    },
  },
  {
    label: t('my-list:filter.checkbox.archived'),
    value: statusesValue.archived,
    type: 'status',
    onChange: () => {
      dispatch(
        filterByStatus({
          statusName: 'archived',
          statusValue: t('my-list:filter.checkbox.archived'),
        }),
      );
    },
  },
];

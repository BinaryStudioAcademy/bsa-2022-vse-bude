import type { TFunction } from 'next-i18next';
import type { FilterButtonProps, CheckboxProps } from './types';

export const filterButtons = ({ t }: { t: TFunction }): FilterButtonProps[] => [
  {
    name: t('my-list:filter.button.all'),
    onClick: () => {
      console.log('event');
    },
  },
  {
    name: t('my-list:filter.button.fixedPrice'),
    onClick: () => {
      console.log('event');
    },
  },
  {
    name: t('my-list:filter.button.auction'),
    onClick: () => {
      console.log('event');
    },
  },
];

export const checkboxes = ({ t }: { t: TFunction }): CheckboxProps[] => [
  {
    label: t('my-list:filter.checkbox.all'),
    value: true,
    onChange: () => {
      console.log('event');
    },
  },
  {
    label: t('my-list:filter.checkbox.purchased'),
    value: false,
    onChange: () => {
      console.log('event');
    },
  },
  {
    label: t('my-list:filter.checkbox.sold'),
    value: false,
    onChange: () => {
      console.log('event');
    },
  },
  {
    label: t('my-list:filter.checkbox.posted'),
    value: false,
    onChange: () => {
      console.log('event');
    },
  },
  {
    label: t('my-list:filter.checkbox.drafts'),
    value: false,
    onChange: () => {
      console.log('event');
    },
  },
  {
    label: t('my-list:filter.checkbox.archived'),
    value: false,
    onChange: () => {
      console.log('event');
    },
  },
];

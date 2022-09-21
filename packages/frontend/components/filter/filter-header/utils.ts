import { Routes } from '@enums';
import type { CategoryDto, ProductQuery } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { Order, SortBy } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';
import type { AllProductType, SortByOption } from './types';

export const MIN_PRICE_NAME = 'min-price';
export const MAX_PRICE_NAME = 'max-price';
export const ALL_PRODUCTS = 'ALL';

export const sortByOptions = (t: TFunction) => [
  {
    title: t('items-page:sortBy.priceAsc'),
    value: {
      sortBy: SortBy.PRICE,
      order: Order.ASC,
    },
  },
  {
    title: t('items-page:sortBy.priceDesc'),
    value: {
      sortBy: SortBy.PRICE,
      order: Order.DESC,
    },
  },
  {
    title: t('items-page:sortBy.dateAsc'),
    value: {
      sortBy: SortBy.DATE,
      order: Order.ASC,
    },
  },
  {
    title: t('items-page:sortBy.dateDesc'),
    value: {
      sortBy: SortBy.DATE,
      order: Order.DESC,
    },
  },
  {
    title: t('items-page:sortBy.viewsAsc'),
    value: {
      sortBy: SortBy.VIEWS,
      order: Order.ASC,
    },
  },
  {
    title: t('items-page:sortBy.viewsDesc'),
    value: {
      sortBy: SortBy.VIEWS,
      order: Order.DESC,
    },
  },
];

export const filterBreadcrumbsPath = (
  t: TFunction,
  category: CategoryDto,
  type: AllProductType,
) => [
  {
    name: t('common:header.nav.home'),
    route: Routes.DEFAULT,
  },
  {
    name: t('common:header.nav.item'),
    route: Routes.ITEMS,
  },
  {
    name: category?.title,
    route: encodeURI(
      `${Routes.ITEMS}?filter=${JSON.stringify({
        categoryId: category?.id,
      })}`,
    ),
  },
  {
    name: type && t(`items-page:typeBtn.${type}`),
    route: encodeURI(
      `${Routes.ITEMS}?filter=${JSON.stringify({
        type: type,
      })}`,
    ),
  },
];

export const productTypeBtnArray = (t: TFunction) => [
  {
    name: ALL_PRODUCTS,
    text: t('items-page:typeBtn.ALL'),
  },
  {
    name: ProductType.SELLING,
    text: t('items-page:typeBtn.SELLING'),
  },
  {
    name: ProductType.AUCTION,
    text: t('items-page:typeBtn.AUCTION'),
  },
];

export const getBudgesFromFilter = (
  filter: ProductQuery,
  t: TFunction,
  currentCategory: CategoryDto,
) => {
  if (!filter || !Object.keys(filter).length) return [];

  return Object.keys(filter).reduce((acc, item) => {
    if (item === 'priceLt') {
      return [
        ...acc,
        {
          name: t('items-page:budges.maxPrice') + filter[item],
          value: filter[item],
        },
      ];
    }
    if (item === 'priceGt') {
      return [
        ...acc,
        {
          name: t('items-page:budges.minPrice') + filter[item],
          value: filter[item],
        },
      ];
    }
    if (item === 'categoryId') {
      if (!currentCategory) return acc;

      return [
        ...acc,
        {
          name: currentCategory?.title,
          value: filter[item],
        },
      ];
    }
    if (item === 'type') {
      return [
        ...acc,
        {
          name: t(`items-page:typeBtn.${filter[item]}`),
          value: filter[item],
        },
      ];
    }
    if (item === 'sortBy') {
      const sortOption: SortByOption = sortByOptions(t).find(
        (option: SortByOption) =>
          option.value.order === filter?.order &&
          option.value.sortBy === filter?.sortBy,
      );
      if (!sortOption) return acc;

      return [
        ...acc,
        {
          name: sortOption.title,
          value: filter[item],
        },
      ];
    }

    return acc;
  }, []);
};

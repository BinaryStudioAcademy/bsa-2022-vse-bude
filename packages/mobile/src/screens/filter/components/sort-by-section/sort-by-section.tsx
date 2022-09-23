import React, { useCallback } from 'react';

import { Order, SortBy, ProductQuery } from '@vse-bude/shared';
import { DropDown } from '~/components/components';
import {
  useAppForm,
  useCustomTheme,
  useTranslation,
  useAppDispatch,
  useMemo,
} from '~/hooks/hooks';
import { filters as filtersActions } from '~/store/actions';
import { FilterSort } from '~/common/enums/enums';
import { DropDownItemType } from '~/common/types/types';
import { SectionTitle } from '../components';

const FilterSortOrderMap = new Map<
  FilterSort,
  Pick<ProductQuery, 'sortBy' | 'order'>
>([
  [FilterSort.EXPENSIVE_TO_CHEAP, { sortBy: SortBy.PRICE, order: Order.DESC }],
  [FilterSort.CHEAP_TO_EXPENSIVE, { sortBy: SortBy.PRICE, order: Order.ASC }],
  [FilterSort.NEW_TO_OLD, { sortBy: SortBy.DATE, order: Order.DESC }],
  [FilterSort.OLD_TO_NEW, { sortBy: SortBy.DATE, order: Order.ASC }],
  [FilterSort.MOST_VIEWS, { sortBy: SortBy.VIEWS, order: Order.DESC }],
  [FilterSort.LEAST_VIEWS, { sortBy: SortBy.VIEWS, order: Order.ASC }],
]);

const SortBySection: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { colors } = useCustomTheme();

  const dropdownItems = useMemo(
    () => [
      { label: t('filter.NEW_TO_OLD'), value: FilterSort.NEW_TO_OLD },
      { label: t('filter.OLD_TO_NEW'), value: FilterSort.OLD_TO_NEW },
      {
        label: t('filter.CHEAP_TO_EXPENSIVE'),
        value: FilterSort.CHEAP_TO_EXPENSIVE,
      },
      {
        label: t('filter.EXPENSIVE_TO_CHEAP'),
        value: FilterSort.EXPENSIVE_TO_CHEAP,
      },
      { label: t('filter.MOST_VIEWS'), value: FilterSort.MOST_VIEWS },
      { label: t('filter.LEAST_VIEWS'), value: FilterSort.LEAST_VIEWS },
    ],
    [],
  );

  const { control } = useAppForm({
    defaultValues: {
      sort: FilterSort.NEW_TO_OLD,
    },
  });

  const handleSelect = useCallback((item: DropDownItemType<string>) => {
    const { value = FilterSort.NEW_TO_OLD } =
      item as DropDownItemType<FilterSort>;
    const { sortBy, order } = FilterSortOrderMap.get(value) ?? {};

    dispatch(filtersActions.update({ sortBy, order }));
  }, []);

  return (
    <>
      <SectionTitle title={t('filter.SORT')} />
      <DropDown
        name="sort"
        control={control}
        items={dropdownItems}
        onSelectItem={handleSelect}
        zIndex={19}
        backgroundColor={colors.backgroundElements}
        dropDownDirection="TOP"
      />
    </>
  );
};

export { SortBySection };

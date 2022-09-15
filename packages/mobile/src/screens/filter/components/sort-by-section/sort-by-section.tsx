import React from 'react';
import { DropDown, View } from '~/components/components';
import {
  useAppForm,
  useCustomTheme,
  useTranslation,
  useAppDispatch,
} from '~/hooks/hooks';
import { sortByFilterData } from '~/mock/sort-by-filter-data';
import { filters as filtersApi } from '~/store/actions';
import { FilterSortBy } from '~/common/enums/enums';
import { Order, SortBy } from '@vse-bude/shared';
import { SectionTitle } from '../components';

const SortBySection = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { colors } = useCustomTheme();
  const { control } = useAppForm({
    defaultValues: {
      sortBy: FilterSortBy.CHEAP_TO_EXPANSIVE,
    },
  });

  const onChange = (value: string) => {
    switch (value) {
      case FilterSortBy.CHEAP_TO_EXPANSIVE:
        dispatch(filtersApi.setSortBy(SortBy.PRICE));
        dispatch(filtersApi.setOrder(Order.ASC));
        break;
      case FilterSortBy.EXPANSIVE_TO_CHEAP:
        dispatch(filtersApi.setSortBy(SortBy.PRICE));
        dispatch(filtersApi.setOrder(Order.DESC));
        break;
      case FilterSortBy.NEW_TO_OLD:
        dispatch(filtersApi.setSortBy(SortBy.DATE));
        dispatch(filtersApi.setOrder(Order.DESC));
        break;
      case FilterSortBy.OLD_TO_NEW:
        dispatch(filtersApi.setSortBy(SortBy.DATE));
        dispatch(filtersApi.setOrder(Order.ASC));
        break;
      case FilterSortBy.MOST_VIEWS:
        dispatch(filtersApi.setSortBy(SortBy.VIEWS));
        dispatch(filtersApi.setOrder(Order.ASC));
        break;
      case FilterSortBy.LEAST_VIEWS:
        dispatch(filtersApi.setSortBy(SortBy.VIEWS));
        dispatch(filtersApi.setOrder(Order.DESC));
        break;
    }
  };

  return (
    <View>
      <SectionTitle title={t('filter.SORT_BY')} />
      <DropDown
        label={''}
        placeholder={FilterSortBy.CHEAP_TO_EXPANSIVE}
        name={'sortBy'}
        control={control}
        items={sortByFilterData}
        zIndex={19}
        backgroundColor={colors.placeholderLight}
        dropDownDirection={'TOP'}
        onChange={onChange}
      />
    </View>
  );
};

export { SortBySection };

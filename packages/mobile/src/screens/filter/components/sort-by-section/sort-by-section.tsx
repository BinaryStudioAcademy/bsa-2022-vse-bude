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
import { SortBy } from '@vse-bude/shared';
import { SectionTitle } from '../components';

const SortBySection = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { colors } = useCustomTheme();
  const { control } = useAppForm({
    defaultValues: {
      sortBy: SortBy.DATE,
    },
  });

  const onChange = (value: string) => {
    dispatch(filtersApi.setSortBy(value));
  };

  return (
    <View>
      <SectionTitle title={t('filter.SORT_BY')} />
      <DropDown
        label={''}
        placeholder={SortBy.DATE}
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

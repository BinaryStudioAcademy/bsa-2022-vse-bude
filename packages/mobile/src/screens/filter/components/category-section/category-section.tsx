import React from 'react';
import { View, RadioButton, Spinner } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { selectCategories, selectFilters } from '~/store/selectors';
import {
  useAppDispatch,
  useAppSelector,
  useEffect,
  useTranslation,
  useMemo,
} from '~/hooks/hooks';
import {
  categories as categoriesActions,
  filters as filtersActions,
} from '~/store/actions';
import { RootState } from '~/common/types/types';
import { SectionTitle } from '../components';

const CategorySection = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const { categoryId } = useAppSelector(selectFilters);
  useEffect(() => {
    dispatch(categoriesActions.loadAllCategories());
  }, []);
  const onFilterSelect = (id: RootState['filters']['categoryId']) => {
    dispatch(filtersActions.setCategory(id));
  };
  const renderedItems = useMemo(() => {
    return categories.map((item) => {
      const { title, id } = item;
      const isSelected = id === categoryId;

      return (
        <RadioButton
          key={id}
          label={title}
          isSelected={isSelected}
          onPress={() => onFilterSelect(id)}
          style={globalStyles.mt4}
        />
      );
    });
  }, [categories, categoryId]);

  return (
    <View>
      <SectionTitle title={t('filter.CATEGORY')} style={globalStyles.mt5} />
      {categories ? (
        <View style={globalStyles.mt5}>{renderedItems}</View>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

export { CategorySection };

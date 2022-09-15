import React from 'react';
import { View, RadioButton, Spinner } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { selectCategories, selectFilters } from '~/store/selectors';
import {
  useAppDispatch,
  useAppSelector,
  useEffect,
  useTranslation,
} from '~/hooks/hooks';
import {
  categories as categoriesApi,
  filters as filtersApi,
} from '~/store/actions';
import { SectionTitle } from '../components';

const CategorySection = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const { categoryId } = useAppSelector(selectFilters);
  useEffect(() => {
    dispatch(categoriesApi.loadAllCategories());
  }, []);
  const onFilterSelect = (id: string) => {
    dispatch(filtersApi.setCategory(id));
  };

  return (
    <View>
      <SectionTitle title={t('filter.CATEGORY')} style={globalStyles.mt5} />
      {categories ? (
        <View style={globalStyles.mt5}>
          {categories.map((item) => {
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
          })}
        </View>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

export { CategorySection };

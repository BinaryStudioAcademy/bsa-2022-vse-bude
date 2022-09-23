import React, { useCallback } from 'react';
import { ProductQuery } from '@vse-bude/shared';

import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { selectCategoriesNonEmpty, selectFilters } from '~/store/selectors';
import { useAppDispatch, useAppSelector, useTranslation } from '~/hooks/hooks';
import { filters as filtersActions } from '~/store/actions';
import { SectionTitle, CategoryListItem } from '../components';

const CategorySection: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectCategoriesNonEmpty);
  const { categoryId: selectedCategoryId } = useAppSelector(selectFilters);

  const handleSelect = useCallback(
    (id: ProductQuery['categoryId']) => {
      dispatch(
        filtersActions.update({
          categoryId: id === selectedCategoryId ? undefined : id,
        }),
      );
    },
    [selectedCategoryId],
  );

  return (
    <>
      <SectionTitle title={t('filter.CATEGORY')} />
      <View style={globalStyles.mt4}>
        {categories.map(({ id }, idx) => (
          <CategoryListItem
            key={id}
            categoryId={id}
            selected={selectedCategoryId === id}
            onSelect={handleSelect}
            contentContainerStyle={idx > 0 && globalStyles.mt3}
          />
        ))}
      </View>
    </>
  );
};

export { CategorySection };

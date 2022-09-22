import React, { FC } from 'react';
import { ProductType } from '@vse-bude/shared';

import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppDispatch, useAppSelector, useTranslation } from '~/hooks/hooks';
import { filters as filtersActions } from '~/store/actions';
import { selectFilters } from '~/store/selectors';
import { ProductTypeSelector, SectionTitle } from '../components';

const ProductTypeSection: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { type } = useAppSelector(selectFilters);

  const handleSelect = (value?: ProductType) => {
    dispatch(filtersActions.update({ type: value }));
  };

  return (
    <>
      <SectionTitle title={t('filter.TYPE')} />
      <View style={[globalStyles.flexDirectionRow, globalStyles.mt4]}>
        <ProductTypeSelector
          title={t('filter.ALL')}
          isSelected={!type}
          onPress={() => handleSelect()}
        />
        <ProductTypeSelector
          title={t('filter.FIXED_PRICE')}
          isSelected={type === ProductType.SELLING}
          onPress={() => handleSelect(ProductType.SELLING)}
        />
        <ProductTypeSelector
          title={t('filter.AUCTION')}
          isSelected={type === ProductType.AUCTION}
          onPress={() => handleSelect(ProductType.AUCTION)}
        />
      </View>
    </>
  );
};

export { ProductTypeSection };

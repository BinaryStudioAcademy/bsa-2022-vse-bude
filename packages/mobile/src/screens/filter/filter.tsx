import React, { FC, useCallback } from 'react';
import { ProductQuery } from '@vse-bude/shared';

import {
  ScreenWrapper,
  StatusBar,
  Divider,
  ScrollView,
  Spinner,
  View,
  Button,
} from '~/components/components';
import {
  useCustomTheme,
  useAppSelector,
  useAppDispatch,
  useNavigation,
  useEffect,
  useSafeAreaInsets,
  useTranslation,
} from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { selectCategoriesDataStatus, selectFilters } from '~/store/selectors';
import {
  products as productsActions,
  categories as categoriesApi,
  filters as filtersActions,
} from '~/store/actions';
import { removeObjectFalsyFields } from '~/helpers/helpers';
import { RootNavigationProps, RootState } from '~/common/types/types';
import { ButtonAppearance, DataStatus } from '~/common/enums/enums';
import { SPACERS } from '~/styles/spacers/spacers';
import {
  ProductTypeSection,
  CategorySection,
  PriceRangeSection,
  SortBySection,
} from './components/components';
import { styles } from './style';

const FilterScreen: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();
  const { bottom: bottomInset } = useSafeAreaInsets();
  const { t } = useTranslation();

  const filters = useAppSelector(selectFilters);
  const categoriesDataStatus = useAppSelector(selectCategoriesDataStatus);

  const loading = categoriesDataStatus === DataStatus.PENDING;

  const handleFiltersSubmitPress = useCallback(() => {
    dispatch(
      productsActions.loadProducts(
        removeObjectFalsyFields<RootState['filters'], ProductQuery>(filters),
      ),
    );
    navigation.goBack();
  }, [filters]);

  const handleCancelPress = () => {
    dispatch(filtersActions.reset());
  };

  useEffect(() => {
    dispatch(categoriesApi.loadAllCategories());
  }, []);

  return (
    <ScreenWrapper>
      <StatusBar backgroundColor={colors.backgroundSecondary} />

      {loading ? (
        <Spinner isOverflow={true} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.filtersContainer,
            globalStyles.py6,
            globalStyles.px5,
          ]}
        >
          <ProductTypeSection />
          <Divider
            contentContainerStyle={[globalStyles.mt6, globalStyles.mb6]}
          />
          <CategorySection />
          <Divider
            contentContainerStyle={[globalStyles.mt6, globalStyles.mb6]}
          />
          <PriceRangeSection />
          <Divider
            contentContainerStyle={[globalStyles.mt6, globalStyles.mb6]}
          />
          <SortBySection />
        </ScrollView>
      )}
      <View
        style={[
          styles.footer,
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentSpaceBetween,
          globalStyles.alignItemsCenter,
          globalStyles.flex1,
          globalStyles.px3,
          {
            paddingBottom: bottomInset + SPACERS.spacer3,
            paddingTop: SPACERS.spacer3,
          },
        ]}
      >
        <Button
          label={t('filter.CANCEL')}
          appearance={ButtonAppearance.TRANSPARENT}
          contentContainerStyle={globalStyles.flex1}
          onPress={handleCancelPress}
        />
        <Button
          label={t('filter.SUBMIT')}
          appearance={ButtonAppearance.TRANSPARENT}
          contentContainerStyle={globalStyles.flex1}
          onPress={handleFiltersSubmitPress}
        />
      </View>
    </ScreenWrapper>
  );
};

export { FilterScreen };

import React, { FC } from 'react';
import { batch } from 'react-redux';
import { ProductType } from '@vse-bude/shared';

import {
  useTranslation,
  useAppDispatch,
  useAppSelector,
  useEffect,
  useNavigation,
} from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  ScreenWrapper,
} from '~/components/components';
import { organizations } from '~/mock/mock';
import {
  products as productsActions,
  categories as categoriesActions,
  filters as filtersActions,
} from '~/store/actions';
import {
  selectCategoriesNonEmpty,
  selectPopularProducts,
  selectPopularLots,
} from '~/store/selectors';
import { RootNavigationProps } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
import {
  Category,
  Organization,
  ProductsSection,
  HomeScreenWrapper,
} from './components/components';
import { styles } from './styles';

const Home: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const auctionProducts = useAppSelector(selectPopularLots);
  const sellingProducts = useAppSelector(selectPopularProducts);
  const categories = useAppSelector(selectCategoriesNonEmpty);

  useEffect(() => {
    batch(() => {
      dispatch(
        productsActions.loadPopularProducts({
          limit: 10,
          type: ProductType.AUCTION,
        }),
      );
      dispatch(
        productsActions.loadPopularLots({
          limit: 10,
          type: ProductType.SELLING,
        }),
      );
      dispatch(categoriesActions.loadAllCategories());
    });
  }, []);

  const onSeeAllLotsPress = () => {
    dispatch(filtersActions.reset());
    dispatch(filtersActions.update({ type: ProductType.AUCTION }));
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  const onSeeAllItemsPress = () => {
    dispatch(filtersActions.reset());
    dispatch(filtersActions.update({ type: ProductType.SELLING }));
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={globalStyles.py5}>
        <HomeScreenWrapper>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Category categoryId={item.id} />}
          />
          <ProductsSection
            sectionTitle={t('home.POPULAR_LOTS')}
            seeAllTitle={t('home.SEE_ALL_LOTS')}
            data={auctionProducts}
            onSeeAllPress={onSeeAllLotsPress}
            contentContainerStyle={[globalStyles.mt6]}
          />
        </HomeScreenWrapper>
        <View
          style={[
            styles.organizationsWrapper,
            globalStyles.justifyContentCenter,
          ]}
        >
          <Text
            style={[
              styles.organizationTitle,
              globalStyles.fs22,
              globalStyles.fontWeightExtraBold,
            ]}
          >
            {t('home.CHARITY_ORGANIZATIONS')}
          </Text>
          <View
            style={[
              styles.imgWrapper,
              globalStyles.justifyContentSpaceBetween,
              globalStyles.alignItemsCenter,
              globalStyles.flexDirectionRow,
            ]}
          >
            {organizations.map((item) => {
              return (
                <Organization
                  key={item.id}
                  imageSource={item.src}
                  contentContainerStyle={[
                    globalStyles.mt6,
                    styles.organizationIcon,
                  ]}
                />
              );
            })}
          </View>
        </View>
        <HomeScreenWrapper>
          <ProductsSection
            sectionTitle={t('home.POPULAR_ITEMS')}
            seeAllTitle={t('home.SEE_ALL_ITEMS')}
            data={sellingProducts}
            onSeeAllPress={onSeeAllItemsPress}
            contentContainerStyle={globalStyles.mt6}
          />
        </HomeScreenWrapper>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { Home };

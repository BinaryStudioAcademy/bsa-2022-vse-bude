import React, { FC } from 'react';
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
  SearchInput,
  StatusBar,
  ScreenWrapper,
} from '~/components/components';
import { ColorPalette, ProductType } from '@vse-bude/shared';
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
  Flag,
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
  }, []);

  const onSeeAllLotsPress = () => {
    dispatch(filtersActions.update({ type: ProductType.AUCTION }));
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  const onSeeAllItemsPress = () => {
    dispatch(filtersActions.update({ type: ProductType.SELLING }));
    navigation.navigate(RootScreenName.PRODUCTS);
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <StatusBar
          backgroundColor={ColorPalette.WHITE_100}
          translucent={false}
          barStyle="dark-content"
        />
        <HomeScreenWrapper>
          <View
            style={[
              styles.header,
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}
          >
            <Text
              style={[
                styles.title,
                globalStyles.fs36,
                globalStyles.fontWeightExtraBold,
              ]}
            >
              {t('home.HELP_UKRAINE')}
            </Text>
            <Flag />
          </View>
          <SearchInput
            placeHolder={t('home.SEARCH_PLACEHOLDER')}
            onValueChange={() => {
              //TODO
            }}
          />
          <FlatList
            style={styles.categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Category
                categoryId={item.id}
                onPress={() => {
                  // TODO
                }}
              />
            )}
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

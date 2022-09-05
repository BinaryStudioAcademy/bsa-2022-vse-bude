import React, { FC, useEffect } from 'react';
import { useTranslation, useAppDispatch, useAppSelector } from '~/hooks/hooks';
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
import { ColorPalette } from '@vse-bude/shared';
import { organizations, categories } from '~/mock/mock';
import { loadAllProducts } from '~/store/products/actions';
import { selectProducts } from '~/store/products/selectors';
import { splitProductType } from '~/helpers/helpers';
import {
  BurgerMenu,
  Category,
  Flag,
  Organization,
  ProductsSection,
  Wrapper,
} from './components/components';
import { styles } from './styles';

const Home: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(loadAllProducts());
  }, []);

  return (
    <>
      {products && (
        <ScreenWrapper>
          <ScrollView>
            <StatusBar
              backgroundColor={ColorPalette.WHITE_100}
              translucent={true}
              barStyle="light-content"
            />
            <Wrapper>
              <BurgerMenu
                onPress={() => {
                  //TODO
                }}
              />
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
                renderItem={({ item }) => (
                  <Category
                    title={item.title}
                    imageSource={item.src}
                    onPress={() => {
                      // TODO
                    }}
                  />
                )}
              />
              <ProductsSection
                sectionTitle={t('home.POPULAR_LOTS')}
                seeAllTitle={t('home.SEE_ALL_LOTS')}
                data={splitProductType(products).auction}
                onSeeAllPress={() => {
                  // TODO
                }}
                wrapperStyles={[globalStyles.mt6]}
              />
            </Wrapper>
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
                      imageSource={item.src}
                      maxHeight={50}
                      width="30%"
                      props={[globalStyles.mt6]}
                    />
                  );
                })}
              </View>
            </View>
            <Wrapper>
              <ProductsSection
                sectionTitle={t('home.POPULAR_ITEMS')}
                seeAllTitle={t('home.SEE_ALL_LOTS')}
                data={splitProductType(products).selling}
                onSeeAllPress={() => {
                  // TODO
                }}
                wrapperStyles={[globalStyles.mt6]}
              />
            </Wrapper>
          </ScrollView>
        </ScreenWrapper>
      )}
    </>
  );
};

export { Home };

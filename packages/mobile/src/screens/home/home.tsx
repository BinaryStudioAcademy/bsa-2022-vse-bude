import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  SearchInput,
  StatusBar,
} from '~/components/components';
import { LotType } from '~/common/enums/enums';
import { ColorPalette } from '@vse-bude/shared';
import { categories } from './components/category/mock-data/categories';
import { lotData } from './components/lot/mock-data/mock-data';
import { organizations } from './components/organization/mock-data/mock-data';
import {
  BurgerMenu,
  Category,
  Flag,
  Organization,
  LotSection,
  Wrapper,
} from './components/components';
import { styles } from './styles';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <StatusBar
        backgroundColor={ColorPalette.WHITE_100}
        barStyle="dark-content"
      />
      <Wrapper>
        <BurgerMenu
          onClick={() => {
            //TODO
          }}
        />
        <View style={[styles.header]}>
          <Text style={[styles.title, globalStyles.fs36]}>
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
        <LotSection
          sectionTitle={t('home.POPULAR_LOTS')}
          extendTitle={t('home.SEE_ALL_LOTS')}
          lotType={LotType.UPCOMING}
          data={lotData}
          onExtendPress={() => {
            // TODO
          }}
        />
      </Wrapper>
      <View style={styles.organizationsWrapper}>
        <Text
          style={[
            styles.organizationTitle,
            globalStyles.fs22,
            globalStyles.fontWeightExtraBold,
          ]}
        >
          {t('home.CHARITY_ORGANIZATIONS')}
        </Text>
        <View style={styles.imgWrapper}>
          {organizations.map((item) => {
            return <Organization imageSource={item.src} />;
          })}
        </View>
      </View>
      <Wrapper>
        <LotSection
          sectionTitle={t('home.POPULAR_ITEMS')}
          extendTitle={t('home.SEE_ALL_LOTS')}
          lotType={LotType.OVER}
          data={lotData}
          onExtendPress={() => {
            // TODO
          }}
        />
      </Wrapper>
    </ScrollView>
  );
};

export { Home };

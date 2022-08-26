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
import { lotData, organizations, categories } from '~/mock/mock';
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
        <LotSection
          sectionTitle={t('home.POPULAR_LOTS')}
          extendTitle={t('home.SEE_ALL_LOTS')}
          lotType={LotType.AUCTION}
          data={lotData}
          onExtendPress={() => {
            // TODO
          }}
          wrapperStyles={[globalStyles.mt6]}
        />
      </Wrapper>
      <View
        style={[styles.organizationsWrapper, globalStyles.justifyContentCenter]}
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
        <LotSection
          sectionTitle={t('home.POPULAR_ITEMS')}
          extendTitle={t('home.SEE_ALL_LOTS')}
          lotType={LotType.FIXED_PRICE}
          data={lotData}
          onExtendPress={() => {
            // TODO
          }}
          wrapperStyles={[globalStyles.mt6]}
        />
      </Wrapper>
    </ScrollView>
  );
};

export { Home };


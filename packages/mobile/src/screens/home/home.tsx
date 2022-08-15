import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  SearchInput,
  ResponsiveText,
} from '~/components/components';
import { categories } from './components/category/mock-data/categories';
import { lotUpcoming } from './components/lot/mock-data/mock-data';
import { organizations } from './components/organization/mock-data/mock-data';
import {
  BurgerMenu,
  Category,
  Flag,
  Lot,
  Organization,
} from './components/components';
import { styles } from './styles';

const Home: FC = () => {
  return (
    <ScrollView style={globalStyles.px4}>
      <BurgerMenu
        onClick={() => {
          //TODO
        }}
      />
      <View style={[styles.header]}>
        <Text style={[styles.title, globalStyles.fs36]}> Help Ukraine</Text>
        <Flag />
      </View>
      <SearchInput
        placeHolder="Search the products"
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
          <Category title={item.title} imageSource={item.src} />
        )}
      />
      <View style={styles.actionHeaderWrapper}>
        <Text
          style={[
            globalStyles.fs22,
            globalStyles.fontWeightBold,
            styles.lotTitle,
          ]}
        >
          Popular Lots
        </Text>
        <ResponsiveText
          text="See All Lots"
          onPress={() => {
            // TODO
          }}
        />
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={lotUpcoming}
        renderItem={({ item }) => (
          <Lot
            type={item.type}
            price={item.price}
            imgSrc={item.imgSrc}
            description={item.description}
            title={item.title}
          />
        )}
      />
      <View style={styles.wrapper}>
        <Text
          style={[
            styles.organizationTitle,
            globalStyles.fs22,
            globalStyles.fontWeightExtraBold,
          ]}
        >
          Charity Organizations
        </Text>
        <View style={styles.imgWrapper}>
          {organizations.map((item) => {
            return <Organization imageSource={item.src} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export { Home };

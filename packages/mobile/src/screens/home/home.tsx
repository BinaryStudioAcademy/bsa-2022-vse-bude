import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import { ScrollView, FlatList } from '~/components/components';
import { categories } from './components/category/mock-data/categories';
import { BurgerMenu, Category, Flag } from './components/components';

const Home: FC = () => {
  return (
    <ScrollView style={globalStyles.px4}>
      <BurgerMenu
        onClick={() => {
          //TODO
        }}
      />
      <Flag />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <Category title={item.title} imageSource={item.src} />
        )}

      />
    </ScrollView>
  );
};

export { Home };

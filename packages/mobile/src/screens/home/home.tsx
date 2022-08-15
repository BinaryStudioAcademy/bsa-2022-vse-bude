import React, { FC } from 'react';
import { globalStyles } from '~/styles/styles';
import { ScrollView, FlatList, View, Text } from '~/components/components';
import { categories } from './components/category/mock-data/categories';
import { lotUpcoming } from './components/lot/mock-data/mock-data';
import { organizations } from './components/organization/mock-data/mock-data';
import { BurgerMenu, Category, Flag, Lot, Organization } from './components/components';
import { styles } from './styles';

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
          title={item.price}
      />
       )}
      />
       <View style={styles.wrapper}>
      <Text
        style={[
          styles.title,
          globalStyles.fs22,
          globalStyles.fontWeightExtraBold,
        ]}
      >
        Charity Organizations
      </Text>
      <View style = {styles.imgWrapper}>
        {organizations.map( (item) => {
          return <Organization imageSource={item.src}/>;
        })}
      </View>
      </View>

    </ScrollView>
  );
};

export { Home };

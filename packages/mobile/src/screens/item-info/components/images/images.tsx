import React, { FC } from 'react';
import { ImageSourcePropType, ListRenderItem } from 'react-native';
import { images } from '~/assets/images/images';
import { Image, Text, View, FlatList } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type ItemImageType = {
  img: ImageSourcePropType;
  id: number;
};

const mockData: ItemImageType[] = [
  { img: images.puff, id: 1 },
  { img: images.puff, id: 2 },
  { img: images.puff, id: 3 },
];

const renderItem: ListRenderItem<ItemImageType> = ({ item, index }) => (
  <View style={styles.imgContainer}>
    <Image source={item.img} />
    <View style={styles.itemsCount}>
      <Text style={styles.currentItem}>{(index + 1).toString()}</Text>
      <Text style={styles.totalItems}>{`/${mockData.length.toString()}`}</Text>
    </View>
  </View>
);

const Images: FC = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={mockData}
      keyExtractor={(item: ItemImageType) => item.id.toString()}
      style={[globalStyles.mt6, globalStyles.mb6]}
      renderItem={renderItem}
    />
  );
};

export { Images };

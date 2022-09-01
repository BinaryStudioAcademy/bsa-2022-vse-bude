import { ProductDto } from '@vse-bude/shared';
import React, { FC } from 'react';
import { ListRenderItem } from 'react-native';
import { Image, Text, View, FlatList } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const ImageCarousel: FC<Pick<ProductDto, 'imageLinks'>> = ({ imageLinks }) => {
  const renderItem: ListRenderItem<string> = ({ item, index }) => (
    <View style={styles.imgContainer}>
      <Image source={{ uri: item }} style={styles.image} />
      <View style={styles.itemsCount}>
        <Text style={styles.currentItem}>{(index + 1).toString()}</Text>
        <Text
          style={styles.totalItems}
        >{`/${imageLinks.length.toString()}`}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      horizontal
      snapToInterval={0}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      data={imageLinks}
      keyExtractor={(item, index) => `${index}_${item}`}
      style={[globalStyles.mt6, globalStyles.mb6]}
      renderItem={renderItem}
    />
  );
};

export { ImageCarousel };

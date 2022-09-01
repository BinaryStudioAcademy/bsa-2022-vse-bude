import React from 'react';
import { ListRenderItem } from 'react-native';
import { Image, Text, View } from '~/components/components';
import { MOCK_PRODUCT } from '~/mock/mock-product-info';
import { styles } from './styles';

const totalItems = MOCK_PRODUCT.imageLinks.length;

const RenderImage: ListRenderItem<string> = ({ item, index }) => (
  <View style={styles.imgContainer}>
    <Image source={{ uri: item }} style={styles.image} />
    <View style={styles.itemsCount}>
      <Text style={styles.currentItem}>{(index + 1).toString()}</Text>
      <Text style={styles.totalItems}>{`/${totalItems}`}</Text>
    </View>
  </View>
);

export { RenderImage };

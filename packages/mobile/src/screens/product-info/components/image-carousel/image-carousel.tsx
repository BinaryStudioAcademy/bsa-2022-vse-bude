import React, { FC } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList, Image, Text, View } from '~/components/components';
import { ProductDto } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { images } from '~/assets/images/images';
import { styles } from './styles';

type ImageCarouselProps = Pick<ProductDto, 'imageLinks'>;

const ImageCarousel: FC<ImageCarouselProps> = ({ imageLinks }) => {
  const isImageAvailable = imageLinks.length > 0;
  const totalCount = imageLinks.length;
  const renderImage: ListRenderItem<string> = ({ item, index }) => (
    <View style={styles.imgContainer}>
      <Image source={{ uri: item }} style={styles.image} />
      <View style={styles.itemsCount}>
        <Text style={styles.currentItem}>{`${index + 1}`}</Text>
        <Text style={styles.totalItems}>{`/${totalCount}`}</Text>
      </View>
    </View>
  );

  return (
    <>
      {isImageAvailable ? (
        <FlatList
          horizontal={true}
          snapToInterval={0}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          data={imageLinks}
          keyExtractor={(item, index) => `${item}_${index}`}
          style={[globalStyles.mt6, globalStyles.mb6]}
          renderItem={renderImage}
        />
      ) : (
        <Image source={images.no_image_available} style={styles.image} />
      )}
    </>
  );
};

export { ImageCarousel };

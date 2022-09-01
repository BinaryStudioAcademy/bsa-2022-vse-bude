import React, { FC } from 'react';
import { FlatList } from '~/components/components';
import { ProductDto } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { RenderImage } from './render-image';

type ImageCarouselProps = Pick<ProductDto, 'imageLinks'>;

const ImageCarousel: FC<ImageCarouselProps> = ({ imageLinks }) => {
  return (
    <FlatList
      horizontal={true}
      snapToInterval={0}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      data={imageLinks}
      keyExtractor={(item) => `${item}`}
      style={[globalStyles.mt6, globalStyles.mb6]}
      renderItem={RenderImage}
    />
  );
};

export { ImageCarousel };

import React, { FC } from 'react';
import { Text, Image, TouchableOpacity } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useAppSelector } from '~/hooks/hooks';
import { selectCategoryById } from '~/store/selectors';
import { CATEGORY_IMAGES_BY_ID } from '~/mock/category-image-by-id';
import { images } from '~/assets/images/images';
import { styles } from './styles';

type Props = {
  categoryId: string;
  onPress: () => void;
};

const Category: FC<Props> = ({ categoryId, onPress }) => {
  const { image, title } =
    useAppSelector((state) => selectCategoryById(state, categoryId)) ?? {};

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentSpaceBetween,
        globalStyles.px2,
        globalStyles.py3,
        globalStyles.mr3,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, globalStyles.fs14]} numberOfLines={3}>
        {title}
      </Text>
      {image && (
        <Image
          style={styles.image}
          source={
            CATEGORY_IMAGES_BY_ID[categoryId] || images.no_image_available
          }
        />
      )}
    </TouchableOpacity>
  );
};

export { Category };

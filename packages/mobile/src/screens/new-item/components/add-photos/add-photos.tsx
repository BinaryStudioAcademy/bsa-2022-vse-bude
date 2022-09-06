import React, { FC, useState, useCallback } from 'react';
import { image as imageService } from '~/services/services';
import {
  View,
  ImageIcon,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  CrossIcon,
} from '~/components/components';
import { pickImageLibrary } from '~/helpers/helpers';
import { useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { ColorPalette } from '@vse-bude/shared';
import { styles } from './styles';

const AddPhotos: FC = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState<string[]>([]);
  const [, setIsUploading] = useState(false);

  const onGalleryOpen = useCallback(async () => {
    setIsUploading(true);
    const file = await pickImageLibrary();
    if (!file) {
      setIsUploading(false);

      return;
    }
    const link = await imageService.uploadImage(file);

    setImages((state) => [...state, link]);
    setIsUploading(false);
  }, []);

  const deleteImage = (index: number) => {
    setImages((state) => state.filter((_, idx) => idx !== index));
  };

  const renderImage = (image: string, index: number) => {
    return (
      <View
        style={[
          styles.btnWrapper,
          globalStyles.px3,
          globalStyles.py3,
          globalStyles.mt5,
          globalStyles.mr5,
        ]}
      >
        <Image source={{ width: 80, height: 80, uri: image }} />

        <TouchableOpacity
          style={[
            styles.deleteButton,
            globalStyles.alignItemsCenter,
            globalStyles.justifyContentCenter,
          ]}
          onPress={() => deleteImage(index)}
          key={index}
        >
          <CrossIcon size={20} color={ColorPalette.RED_100} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map(renderImage)}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={onGalleryOpen}
        style={[styles.btnWrapper, globalStyles.px5, globalStyles.mt5]}
      >
        <View style={styles.btnContainer}>
          <ImageIcon size={16} style={styles.icon} />
          <Text style={[globalStyles.fs14, styles.btnText]}>
            {t('make_a_post.ADD_PHOTOS')}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export { AddPhotos };

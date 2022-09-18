import React, { FC, useCallback, Dispatch, SetStateAction } from 'react';
import { Asset } from 'react-native-image-picker';
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

type Props = {
  images: Asset[];
  setImages: Dispatch<SetStateAction<Asset[]>>;
};

const AddPhotos: FC<Props> = ({ images, setImages }) => {
  const { t } = useTranslation();

  const onGalleryOpen = useCallback(async () => {
    const file = await pickImageLibrary();
    if (!file) {
      return;
    }

    setImages((state) => [...state, file]);
  }, []);

  const deleteImage = (index: number) => {
    setImages((state) => state.filter((_, idx) => idx !== index));
  };

  const renderImage = (image: Asset, index: number) => {
    return (
      <View
        key={index}
        style={[
          styles.btnWrapper,
          globalStyles.px3,
          globalStyles.py3,
          globalStyles.mt5,
          globalStyles.mr5,
        ]}
      >
        <Image source={{ width: 80, height: 80, uri: image.uri }} />

        <TouchableOpacity
          style={[
            styles.deleteButton,
            globalStyles.alignItemsCenter,
            globalStyles.justifyContentCenter,
          ]}
          onPress={() => deleteImage(index)}
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

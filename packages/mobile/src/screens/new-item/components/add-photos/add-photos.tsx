import React, { FC } from 'react';
import {
  View,
  ImageIcon,
  TouchableOpacity,
  Text,
} from '~/components/components';
import { useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const AddPhotos: FC = () => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={[styles.btnWrapper, globalStyles.px5, globalStyles.mt5]}
    >
      <View style={styles.btnContainer}>
        <ImageIcon size={16} style={styles.icon} />
        <Text style={[globalStyles.fs14, styles.btnText]}>
          {t('make_a_post.ADD_PHOTOS')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { AddPhotos };

import React, { FC } from 'react';
import {
  View,
  UserIcon,
  Pressable,
  CameraIcon,
  FlagBackgroundView,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const ProfileImage: FC = () => {
  return (
    <View style={[styles.container, globalStyles.px5, globalStyles.mt5]}>
      <FlagBackgroundView style={styles.flag} />
      <View style={styles.photoWrapper}>
        <View style={styles.photoContainer}>
          <UserIcon size={130} />
        </View>
        <Pressable
          style={[
            styles.photoButton,
            globalStyles.alignItemsCenter,
            globalStyles.justifyContentCenter,
          ]}
        >
          <CameraIcon size={18} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export { ProfileImage };

import React, { FC } from 'react';
import {
  View,
  LinearGradient,
  UserIcon,
  Pressable,
  CameraIcon,
} from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const ProfileImage: FC = () => {
  const { colors } = useCustomTheme();

  return (
    <View style={[styles.container, globalStyles.px5, globalStyles.mt5]}>
      <LinearGradient
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.9 }}
        colors={[colors.flagTop, colors.flagBottom]}
        style={styles.flag}
      />
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

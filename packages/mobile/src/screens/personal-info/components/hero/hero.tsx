import React, { FC } from 'react';
import {
  View,
  LinearGradient,
  UserIcon,
  Pressable,
  CameraIcon,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const Hero: FC = () => {
  return (
    <View
      style={[
        styles.container,
        globalStyles.px5,
        globalStyles.mt5,
        globalStyles.mb3,
      ]}
    >
      <LinearGradient
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.9 }}
        colors={['#0C42A6', '#F4C50A']}
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

export { Hero };

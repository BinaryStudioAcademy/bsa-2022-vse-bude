import React, { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  View,
  Image,
  UserIcon,
  Pressable,
  CameraIcon,
  FlagBackgroundView,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  avatar?: string;
};

const ProfileImage: FC<Props> = ({ avatar }) => {
  return (
    <View style={[styles.container, globalStyles.px5, globalStyles.mt5]}>
      <FlagBackgroundView style={styles.flag} />
      <View style={styles.photoWrapper}>
        <View style={styles.photoContainer}>
          {avatar ? (
            <Image
              source={avatar as ImageSourcePropType}
              style={{ width: 130, height: 130 }}
            />
          ) : (
            <UserIcon size={130} />
          )}
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

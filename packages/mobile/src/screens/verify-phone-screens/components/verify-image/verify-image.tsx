import React, { FC } from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';
import { Image, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  source: ImageSourcePropType;
  contentContainerStyle?: ViewStyle;
};

const VerifyImage: FC<Props> = ({ source, contentContainerStyle }) => {
  return (
    <View style={[globalStyles.alignItemsCenter, contentContainerStyle]}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export { VerifyImage };

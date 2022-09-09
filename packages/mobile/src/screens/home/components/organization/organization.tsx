import React, { FC } from 'react';
import { View, Image } from '~/components/components';
import { ViewStyle, ImageURISource, StyleProp } from 'react-native';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  imageSource: ImageURISource;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const Organization: FC<Props> = ({ imageSource, contentContainerStyle }) => {
  return (
    <View style={[globalStyles.alignItemsCenter, contentContainerStyle]}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export { Organization };

import React, { FC } from 'react';
import { View, Image } from '~/components/components';
import { FlexStyle, ImageURISource } from 'react-native';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  imageSource: ImageURISource;
  width?: number | string;
  maxHeight?: number | string;
  props?: FlexStyle[];
};

const Organization: FC<Props> = ({ imageSource, width, maxHeight, props }) => {
  return (
    <View style={[globalStyles.alignItemsCenter, { width, maxHeight }, props]}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export { Organization };

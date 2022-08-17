import React, { FC } from 'react';
import { View, Image } from '~/components/components';
import { ImageURISource } from 'react-native';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  imageSource: ImageURISource;
  width?: number | string;
  maxHeight?: number | string;
};

const Organization: FC<Props> = ({ imageSource, width, maxHeight }) => {
  return (
    <View style={[globalStyles.alignItemsCenter, { width, maxHeight }]}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export { Organization };

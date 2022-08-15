import React, { FC } from 'react';
import { View, Text, Image } from '~/components/components';
import { ImageSourcePropType } from 'react-native';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  title: string;
  imageSource: ImageSourcePropType;
};

const Category: FC<Props> = ({ title, imageSource }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, globalStyles.fs14]}>{title}</Text>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export { Category };

import React, { FC } from 'react';
import { Text, Image, TouchableOpacity } from '~/components/components';
import { ImageSourcePropType } from 'react-native';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  title: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
};

const Category: FC<Props> = ({ title, imageSource, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentSpaceBetween,
      ]}
      onPress={() => onPress()}
    >
      <Text style={[styles.title, globalStyles.fs14]}>{title}</Text>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

export { Category };

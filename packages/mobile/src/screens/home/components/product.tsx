import React, { FC } from 'react';
import { Text, View, Button, Image } from '~/components/components';
import { ButtonType, ButtonAppearance } from '~/common/enums/enums';
import { images } from '~/assets/pictures/images/images';
import { styles } from './style';

type Props = {
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
};

export const Product: FC<Props> = ({ title, description, price, imageUrl }) => {
  return (
    <>
      <Image
        source={images.stamp ? images.stamp : { uri: imageUrl }}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.price_wrapper}>
          <Text style={styles.price}>{price} UAH</Text>
          <Button
            label="Bet"
            type={ButtonType.SECONDARY}
            view={ButtonAppearance.FILLED}
            onPress={() => {
              // to do
            }}
          />
        </View>
      </View>
    </>
  );
};

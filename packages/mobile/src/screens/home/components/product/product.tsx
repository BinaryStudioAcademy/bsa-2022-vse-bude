import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { Button, ClockIcon, Image, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductType } from '@vse-bude/shared';
import { styles } from './styles';

type Props = {
  imageLinks: string[];
  title: string;
  description: string;
  price: string;
  type: ProductType;
  endDate?: string;
};

const Product: FC<Props> = ({
  imageLinks,
  title,
  description,
  price,
  type,
}) => {
  const { t } = useTranslation();
  const transformPrice = (price: string) => {
    return price.length > 2 ? `${price.slice(0, 2)} ${price.slice(2)}` : price;
  };

  return (
    <View style={[styles.container, globalStyles.boxShadow]}>
      <View style={[styles.imgWrapper]}>
        <Image source={{ uri: imageLinks[0] }} style={styles.img} />

        {type === ProductType.AUCTION ? (
          <View
            style={[
              styles.time,
              globalStyles.boxShadow,
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyContentCenter,
            ]}
          >
            <ClockIcon />
            <Text style={globalStyles.ml2}>2 дня 5 г 15 хв</Text>
          </View>
        ) : null}
      </View>
      <View>
        <Text
          style={[globalStyles.fs16, globalStyles.fontWeightBold, styles.title]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text
          style={[globalStyles.fs14, globalStyles.fontWeightRegular]}
          numberOfLines={2}
        >
          {description}
        </Text>
        {type === ProductType.FIXED_PRICE && (
          <Text style={globalStyles.fs12}>2 дні тому</Text>
        )}
      </View>
      <View style={styles.divider} />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentSpaceBetween,
        ]}
      >
        <Text
          style={[globalStyles.fs16, globalStyles.fontWeightBold, styles.price]}
        >{`${transformPrice(price)} ${t('common:currency.UAH')}`}</Text>
        <Button
          label={
            type === ProductType.AUCTION
              ? t('common:components.BUTTON_BID')
              : t('common:components.BUTTON_BUY')
          }
          onPress={() => {
            //TODO
          }}
        ></Button>
      </View>
    </View>
  );
};

export { Product };

import React, { FC } from 'react';
import { useTranslation, useAppSelector } from '~/hooks/hooks';
import { createSelector } from '@reduxjs/toolkit';
import { Button, ClockIcon, Image, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductType, ProductDto } from '@vse-bude/shared';
import { addSpacePrice, getTimeToEvent } from '~/helpers/helpers';
import { RootState } from '~/common/types/types';
import { styles } from './styles';

type Props = {
  id: string;
};

const Product: FC<Props> = ({ id }) => {
  const selector = createSelector(
    (state: RootState) => state.products.products,
    (products) => {
      return products.find((item) => item.id === id);
    },
  );

  const { imageLinks, title, description, price, type, endDate } =
    useAppSelector(selector) as ProductDto;
  const duration = getTimeToEvent(endDate);
  const auction = ProductType.AUCTION;
  const { t } = useTranslation();

  return (
    <View style={[styles.container, globalStyles.boxShadow]}>
      <View style={[styles.imgWrapper]}>
        <Image source={{ uri: imageLinks[0] }} style={styles.img} />

        {type === auction && (
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
            <Text style={globalStyles.fs12}>{duration}</Text>
          </View>
        )}
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
          <Text style={globalStyles.fs12}>{duration}</Text>
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
        >{`${addSpacePrice(price)} ${t('common:currency.UAH')}`}</Text>
        <Button
          label={
            type === auction
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

import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { Button, ClockIcon, Image, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { LotType } from '~/common/enums/enums';
import { ImageURISource } from 'react-native';
import { styles } from './styles';

type Props = {
  imgSrc: ImageURISource;
  actionEnd?: Date;
  title: string;
  description: string;
  price: string;
  type: LotType;
};

const Lot: FC<Props> = ({ imgSrc, title, description, price, type }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, globalStyles.boxShadow]}>
      <View style={[styles.imgWrapper]}>
        <Image source={imgSrc} style={styles.img} />

        {type === LotType.UPCOMING ? (
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
        {type === LotType.OVER && (
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
        >{`${price} ${t('currency.UAH')}`}</Text>
        <Button
          label={type === LotType.UPCOMING ? t('button.BID') : t('button.BUY')}
          onPress={() => {
            //TODO
          }}
        ></Button>
      </View>
    </View>
  );
};

export { Lot };

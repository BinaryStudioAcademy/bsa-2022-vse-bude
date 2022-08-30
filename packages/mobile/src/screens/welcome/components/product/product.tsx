import React, { FC } from 'react';
import { Text, View, Image, PrimaryButton } from '~/components/components';
import { useTranslation } from '~/hooks/hooks';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { styles } from './style';

export const Product: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Image source={images.stamp} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={[styles.title, globalStyles.fontWeightBold]}>
          {t('welcome.TITLE')}
        </Text>
        <Text style={globalStyles.fs12} numberOfLines={2}>
          {t('welcome.DESCRIPTION')}
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.priceWrapper}>
          <Text
            style={[
              globalStyles.fs17,
              globalStyles.fontWeightBold,
              styles.price,
            ]}
          >
            {`360 ${t('welcome.UAH')}`}
          </Text>
          <PrimaryButton
            label={t('welcome.BET')}
            compact={true}
            onPress={() => {
              //TODO
            }}
          />
        </View>
      </View>
    </>
  );
};

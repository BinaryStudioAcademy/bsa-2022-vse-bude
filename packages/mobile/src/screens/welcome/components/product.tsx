import React, { FC } from 'react';
import { Text, View, Button, Image } from '~/components/components';
import { ButtonType, ButtonAppearance } from '~/common/enums/enums';
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
          {t('stamp.TITLE')}
        </Text>
        <Text style={globalStyles.fs12} numberOfLines={2}>
          {t('stamp.DESCRIPTION')}
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.price_wrapper}>
          <Text
            style={[
              globalStyles.fs17,
              globalStyles.fontWeightBold,
              styles.price,
            ]}
          >
            360 {t('stamp.CURRENCY_UA')}
          </Text>
          <Button
            label={t('stamp.BET')}
            type={ButtonType.SECONDARY}
            view={ButtonAppearance.FILLED}
            fontSize={11}
            onPress={() => {
              // to do
            }}
          />
        </View>
      </View>
    </>
  );
};

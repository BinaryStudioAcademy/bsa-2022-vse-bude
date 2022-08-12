import React, { FC } from 'react';
import { Text, View, Button, Image } from '~/components/components';
import { ButtonType, ButtonAppearance } from '~/common/enums/enums';
import { useTranslation } from '~/hooks/hooks';
import { images } from '~/assets/images/images';
import { styles } from './style';

export const Product: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Image source={images.stamp} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{t('stamp.TITLE')}</Text>
        <Text style={styles.text} numberOfLines={2}>
          {t('stamp.DESCRIPTION')}
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.price_wrapper}>
          <Text style={styles.price}>360 UAH</Text>
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

import React, { FC } from 'react';
import { images } from '~/assets/images/images';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import {
  Text,
  ScreenWrapper,
  Image,
  View,
  PrimaryButton,
} from '~/components/components';
import { useNavigation, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { useStyles } from './styles';

const TypeOfPostScreen: FC = () => {
  const styles = useStyles();
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();

  const handleMakePost = () => {
    navigation.navigate(RootScreenName.NEW_ITEM);
  };

  const handleMakeAuction = () => {
    // TODO: change to RootScreenName.NEW_AUCTION after merge
    navigation.navigate(RootScreenName.NEW_ITEM);
  };

  return (
    <ScreenWrapper style={styles.screen}>
      <Text
        style={[
          globalStyles.fs22,
          globalStyles.fontWeightExtraBold,
          globalStyles.mt5,
        ]}
      >
        {t('type_of_post.HEADER')}
      </Text>
      <View style={[globalStyles.py7]}>
        <Image source={images.chooseTypeThumb} style={styles.image} />
      </View>
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('type_of_post.AUCTION')}
          onPress={handleMakePost}
        />
      </View>
      <View style={[globalStyles.mt5, globalStyles.alignItemsCenter]}>
        <Text>{t('common:text.OR')}</Text>
      </View>
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('type_of_post.DIRECT_SALE')}
          onPress={handleMakeAuction}
        />
      </View>
    </ScreenWrapper>
  );
};

export { TypeOfPostScreen };

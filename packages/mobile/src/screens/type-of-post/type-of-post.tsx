import { UserDto } from '@vse-bude/shared';
import React, { FC } from 'react';
import { images } from '~/assets/images/images';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import { selectCurrentUser } from '~/store/selectors';
import {
  Text,
  ScreenWrapper,
  Image,
  View,
  PrimaryButton,
  Pressable,
} from '~/components/components';
import { useAppSelector, useNavigation, useTranslation } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { useStyles } from './styles';

const TypeOfPostScreen: FC = () => {
  const styles = useStyles();
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();
  const { phoneVerified, emailVerified } = useAppSelector(
    selectCurrentUser,
  ) as UserDto;
  const isAbleToMakePost = phoneVerified && emailVerified;

  const handleMakePost = () => {
    navigation.navigate(RootScreenName.NEW_ITEM);
  };

  const handleMakeAuction = () => {
    navigation.navigate(RootScreenName.NEW_AUCTION);
  };

  const handleNavigateToPersonalInfo = () => {
    navigation.navigate(RootScreenName.PERSONAL_INFO);
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
      <View style={globalStyles.py7}>
        <Image source={images.chooseTypeThumb} style={styles.image} />
      </View>
      {!isAbleToMakePost && (
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.py3,
            styles.verifyMessage,
          ]}
        >
          <Text>{t('type_of_post.VERIFY_MESSAGE_START')}</Text>
          <Pressable onPress={handleNavigateToPersonalInfo}>
            <Text style={styles.link}>{t('type_of_post.VERIFY_LINK')}</Text>
          </Pressable>
          <Text>{t('type_of_post.VERIFY_MESSAGE_END')}</Text>
        </View>
      )}
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('type_of_post.AUCTION')}
          onPress={handleMakeAuction}
          disabled={!isAbleToMakePost}
        />
      </View>
      <View style={[globalStyles.mt5, globalStyles.alignItemsCenter]}>
        <Text>{t('common:text.OR')}</Text>
      </View>
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('type_of_post.DIRECT_SALE')}
          onPress={handleMakePost}
          disabled={!isAbleToMakePost}
        />
      </View>
    </ScreenWrapper>
  );
};

export { TypeOfPostScreen };

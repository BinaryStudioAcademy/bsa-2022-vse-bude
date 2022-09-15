import React, { FC, ReactElement } from 'react';
import {
  KeyboardAvoiding,
  ScreenWrapper,
  StatusBar,
  View,
} from '~/components/components';
import {
  useNavigation,
  useRoute,
  useTranslation,
  useCustomTheme,
} from '~/hooks/hooks';
import { RootScreenName } from '~/common/enums/enums';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps } from '~/common/types/types';
import { Header } from '../components/components';
import { NewItemForm } from './components/new-item-form/new-item-form';
import { NewAuctionForm } from './components/new-auction-form/new-auction-form';

const NewItemScreen: FC = () => {
  const { t } = useTranslation();
  const { dark, colors } = useCustomTheme();
  const { name } = useRoute();
  const navigation = useNavigation<RootNavigationProps>();
  const headerTitle =
    name === RootScreenName.NEW_ITEM
      ? t('make_a_post.TITLE')
      : t('make_a_post.AUCTION_TITLE');

  const handleBackButtonPress = (): void => {
    navigation.goBack();
  };

  const getScreen = (screen: string): ReactElement | null => {
    switch (screen) {
      case RootScreenName.NEW_ITEM: {
        return <NewItemForm />;
      }
      case RootScreenName.NEW_AUCTION: {
        return <NewAuctionForm />;
      }
    }

    return null;
  };

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={colors.backgroundSecondary}
        translucent={true}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Header
        title={headerTitle}
        labelButton={t('verify.BACK_BUTTON')}
        onPress={handleBackButtonPress}
      />
      <View style={[globalStyles.flex1, globalStyles.px5]}>
        <KeyboardAvoiding>{getScreen(name)}</KeyboardAvoiding>
      </View>
    </ScreenWrapper>
  );
};

export { NewItemScreen };

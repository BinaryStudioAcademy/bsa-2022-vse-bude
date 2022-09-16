import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { t } from 'i18next';
import { BurgerMenu, ButtonText } from '~/components/components';
import { globalStyles } from '~/styles/styles';

type Props = {
  route: RouteProp<RootNavigationParamList>;
  navigation: NavigationProp<RootNavigationParamList>;
};

const getItemsScreenOptions = ({
  route,
  navigation,
}: Props): NativeStackNavigationOptions => {
  const getTitle = (screenName: RootScreenName) => {
    if (screenName === RootScreenName.ITEMS_AND_SERVICES) {
      return t('items_and_services.TITLE');
    }
  };

  return {
    headerShown: true,
    headerTitleAlign: 'center',
    title: getTitle(route.name),
    headerTitleStyle: { fontSize: 16 },
    headerLeft: () => (
      <BurgerMenu
        onPress={() => {
          //TODO
        }}
      />
    ),
    headerRight: () => (
      <ButtonText
        textStyle={globalStyles.fs16}
        onPress={() => {
          navigation.navigate(RootScreenName.FILTER);
        }}
      >
        {t('common:components.BUTTON_FILTER')}
      </ButtonText>
    ),
  };
};

export { getItemsScreenOptions };

import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BurgerMenu, ButtonText } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { t } from 'i18next';
import { RootNavigationParamList } from '~/common/types/types';
import { RouteProp } from '@react-navigation/native';
import { RootScreenName } from '~/common/enums/enums';

type Props = {
  route: RouteProp<RootNavigationParamList>;
};

const itemsScreenOptions = ({ route }: Props): NativeStackNavigationOptions => {
  const getTitle = (screenName: RootScreenName) => {
    switch (screenName) {
      case RootScreenName.ITEMS_AND_SERVICES:
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
          //TODO
        }}
      >
        {t('common:components.BUTTON_FILTER')}
      </ButtonText>
    ),
  };
};

export { itemsScreenOptions };

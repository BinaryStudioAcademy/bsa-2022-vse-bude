import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { Auth, Welcome } from '~/screens/screens';

const WelcomeNavigation: FC = () => {
  const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
  const welcomeScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NativeStack.Navigator screenOptions={welcomeScreenOptions}>
      <NativeStack.Screen name={RootScreenName.WELCOME} component={Welcome} />
      <NativeStack.Screen name={RootScreenName.SIGN_UP} component={Auth} />
      <NativeStack.Screen name={RootScreenName.SIGN_IN} component={Auth} />
    </NativeStack.Navigator>
  );
};

export { WelcomeNavigation };

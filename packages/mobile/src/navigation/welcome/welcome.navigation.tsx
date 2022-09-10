import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { WelcomeRootScreenName } from '~/common/enums/enums';
import { WelcomeRootNavigationParamList } from '~/common/types/types';
import { Auth, Welcome } from '~/screens/screens';

const WelcomeNavigation: FC = () => {
  const NativeStack =
    createNativeStackNavigator<WelcomeRootNavigationParamList>();
  const welcomeScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NativeStack.Navigator screenOptions={welcomeScreenOptions}>
      <NativeStack.Screen
        name={WelcomeRootScreenName.WELCOME}
        component={Welcome}
      />
      <NativeStack.Screen
        name={WelcomeRootScreenName.SIGN_UP}
        component={Auth}
      />
      <NativeStack.Screen
        name={WelcomeRootScreenName.SIGN_IN}
        component={Auth}
      />
      <NativeStack.Screen
        name={WelcomeRootScreenName.FORGOT_PASSWORD}
        component={Auth}
      />
    </NativeStack.Navigator>
  );
};

export { WelcomeNavigation };

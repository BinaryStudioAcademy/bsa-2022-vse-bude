import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { RegistrationScreenName } from '~/common/enums/enums';
import { RegistrationNavigationParamList } from '~/common/types/types';
import { Auth, Welcome } from '~/screens/screens';

const WelcomeNavigation: FC = () => {
  const NativeStack =
    createNativeStackNavigator<RegistrationNavigationParamList>();
  const welcomeScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NativeStack.Navigator screenOptions={welcomeScreenOptions}>
      <NativeStack.Screen
        name={RegistrationScreenName.WELCOME}
        component={Welcome}
      />
      <NativeStack.Screen
        name={RegistrationScreenName.SIGN_UP}
        component={Auth}
      />
      <NativeStack.Screen
        name={RegistrationScreenName.SIGN_IN}
        component={Auth}
      />
      <NativeStack.Screen
        name={RegistrationScreenName.FORGOT_PASSWORD}
        component={Auth}
      />
    </NativeStack.Navigator>
  );
};

export { WelcomeNavigation };

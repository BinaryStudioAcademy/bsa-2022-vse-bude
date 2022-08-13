import React from 'react';

import { AccountScreenName } from '~/common/enums/enums';
import {
  PersonalInfoScreen,
  SettingsScreen,
  SupportScreen,
  Account,
  MessagesScreen,
} from '~/screens/screens';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { AccountNavigationParamList } from '~/common/types/types';

const Stack = createNativeStackNavigator<AccountNavigationParamList>();

const AccountNavigation = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={AccountScreenName.ACCOUNT_ROOT}
    >
      <Stack.Screen name={AccountScreenName.ACCOUNT_ROOT} component={Account} />
      <Stack.Screen
        name={AccountScreenName.PERSONAL_INFO}
        component={PersonalInfoScreen}
      />
      <Stack.Screen
        name={AccountScreenName.SETTINGS}
        component={SettingsScreen}
      />
      <Stack.Screen
        name={AccountScreenName.MESSAGES}
        component={MessagesScreen}
      />
      <Stack.Screen
        name={AccountScreenName.SUPPORT}
        component={SupportScreen}
      />
    </Stack.Navigator>
  );
};

export { AccountNavigation };

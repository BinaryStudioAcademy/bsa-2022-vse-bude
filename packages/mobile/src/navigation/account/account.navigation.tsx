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
import { useCustomTheme, useTranslation } from '~/hooks/hooks';
import { HeaderLeft } from '~/components/components';

const Stack = createNativeStackNavigator<AccountNavigationParamList>();

const AccountNavigation = () => {
  const { t } = useTranslation();
  const { dark, colors } = useCustomTheme();

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={AccountScreenName.ACCOUNT_ROOT}
    >
      <Stack.Screen
        name={AccountScreenName.ACCOUNT_ROOT}
        component={Account}
        options={{
          headerTitle: t('account.ACCOUNT'),
          headerStyle: {
            backgroundColor: dark
              ? colors.backgroundSecondary
              : colors.background,
          },
          headerTintColor: colors.titlePrimary,
          headerLeft: () => <HeaderLeft />,
        }}
      />
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

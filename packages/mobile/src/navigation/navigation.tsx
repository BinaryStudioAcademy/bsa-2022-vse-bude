import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import {
  MessagesScreen,
  PersonalInfoScreen,
  SettingsScreen,
  SupportScreen,
  Auth,
  Welcome,
} from '~/screens/screens';
import { MainNavigation } from './tabs/tabs.navigation';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
const Stack = createNativeStackNavigator<RootNavigationParamList>();

const mainScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const accountScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
};

const Navigation: FC = () => {
  const isLoggedIn = false;

  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      {isLoggedIn ? (
        <NativeStack.Group>
          <NativeStack.Screen
            name={RootScreenName.MAIN}
            component={MainNavigation}
          />
          <NativeStack.Group screenOptions={accountScreenOptions}>
            <Stack.Screen
              name={RootScreenName.PERSONAL_INFO}
              component={PersonalInfoScreen}
            />
            <Stack.Screen
              name={RootScreenName.SETTINGS}
              component={SettingsScreen}
            />
            <Stack.Screen
              name={RootScreenName.MESSAGES}
              component={MessagesScreen}
            />
            <Stack.Screen
              name={RootScreenName.SUPPORT}
              component={SupportScreen}
            />
          </NativeStack.Group>
        </NativeStack.Group>
      ) : (
        <NativeStack.Group
          navigationKey={`auth-group-${isLoggedIn ? 'user' : 'guest'}`}
        >
          <NativeStack.Screen
            name={RootScreenName.WELCOME}
            component={Welcome}
          />
          <NativeStack.Screen name={RootScreenName.SIGN_UP} component={Auth} />
          <NativeStack.Screen name={RootScreenName.SIGN_IN} component={Auth} />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };

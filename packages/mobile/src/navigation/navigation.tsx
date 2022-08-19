import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { useAppSelector } from '~/hooks/hooks';
import { selectCurrentUser } from '~/store/auth/selectors';
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
  const user = useAppSelector(selectCurrentUser);

  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      {user ? (
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
          navigationKey={`auth-group-${user ? 'user' : 'guest'}`}
        >
          <NativeStack.Screen
            name={RootScreenName.MAIN}
            component={MainNavigation}
          />
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

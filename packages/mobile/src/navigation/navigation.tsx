import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Auth } from '~/screens/auth/auth';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { MainNavigation } from './main/main.navigation';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigation: FC = () => {
  const isLoggedIn = false;

  return (
    <NativeStack.Navigator screenOptions={screenOptions}>
      {isLoggedIn ? (
        <NativeStack.Screen
          name={RootScreenName.MAIN}
          component={MainNavigation}
        />
      ) : (
        <NativeStack.Group
          navigationKey={`auth-group-${isLoggedIn ? 'user' : 'guest'}`}
        >
          <NativeStack.Screen name={RootScreenName.SIGN_UP} component={Auth} />
          <NativeStack.Screen name={RootScreenName.SIGN_IN} component={Auth} />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };

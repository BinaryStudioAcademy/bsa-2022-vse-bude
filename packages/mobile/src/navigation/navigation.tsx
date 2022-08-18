import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Auth, Welcome } from '~/screens/screens';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { useAppSelector } from '~/hooks/hooks';
import { getIsLoggedIn } from '~/store/auth/selectors';
import { MainNavigation } from './main/main.navigation';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

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

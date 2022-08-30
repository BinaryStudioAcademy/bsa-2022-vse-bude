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
  ProductInfo,
  SettingsScreen,
  SupportScreen,
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
  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      <NativeStack.Screen
        name={RootScreenName.MAIN}
        component={MainNavigation}
      />
      <Stack.Screen
        name={RootScreenName.PRODUCT_INFO}
        component={ProductInfo}
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
        <Stack.Screen name={RootScreenName.SUPPORT} component={SupportScreen} />
      </NativeStack.Group>
    </NativeStack.Navigator>
  );
};

export { Navigation };

import React, { FC } from 'react';
import { t } from 'i18next';
import { useAppSelector } from '~/hooks/hooks';
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
} from '~/screens/screens';
import { selectCurrentUser } from '~/store/selectors';
import { MainNavigation } from './tabs/tabs.navigation';
import { VerifyNavigation } from './verify/verify.navigation';

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
      <NativeStack.Screen
        name={RootScreenName.MAIN}
        component={MainNavigation}
      />
      {user && (
        <NativeStack.Group screenOptions={accountScreenOptions}>
          <Stack.Screen
            name={RootScreenName.PERSONAL_INFO}
            component={PersonalInfoScreen}
            options={{
              title: t('personal_info.PERSONAL_INFO'),
            }}
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
          <Stack.Screen
            name={RootScreenName.VERIFY}
            component={VerifyNavigation}
            options={{
              headerShown: false,
            }}
          />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };

import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { useAppSelector, useTranslation } from '~/hooks/hooks';
import { selectCurrentUser } from '~/store/selectors';
import {
  MessagesScreen,
  PersonalInfoScreen,
  SettingsScreen,
  SupportScreen,
  NewItemScreen,
} from '~/screens/screens';
import { HeaderLeft, HeaderSave } from '~/components/components';
import { MainNavigation } from './tabs/tabs.navigation';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
const Stack = createNativeStackNavigator<RootNavigationParamList>();

const mainScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const accountScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 16 },
};

const Navigation: FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const { t } = useTranslation();

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
            name={RootScreenName.NEW_ITEM}
            component={NewItemScreen}
            options={{
              title: t('make_a_post.TITLE'),
              headerLeft: () => {
                return <HeaderLeft />;
              },
              headerRight: () => {
                return <HeaderSave />;
              },
            }}
          />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };

import React, { FC } from 'react';
import { t } from 'i18next';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { useAppSelector } from '~/hooks/hooks';
import { selectCurrentUser } from '~/store/selectors';
import {
  MessagesScreen,
  PersonalInfoScreen,
  SettingsScreen,
  SupportScreen,
  NewItemScreen,
  TypeOfPostScreen,
} from '~/screens/screens';
import { HeaderLeft } from '~/components/components';
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
            name={RootScreenName.NEW_ITEM}
            component={NewItemScreen}
            options={{
              title: t('make_a_post.TITLE'),
              headerLeft: HeaderLeft,
            }}
          />
          <Stack.Screen
            name={RootScreenName.NEW_AUCTION}
            component={NewItemScreen}
            options={{
              title: t('make_a_post.AUCTION_TITLE'),
              headerLeft: HeaderLeft,
            }}
          />
          <Stack.Screen
            name={RootScreenName.TYPE_OF_NEW_POST}
            component={TypeOfPostScreen}
            options={{
              title: t('make_a_post.TITLE'),
              headerLeft: HeaderLeft,
            }}
          />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };

import React, { FC } from 'react';
import { t } from 'i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import { MainNavigation } from './tabs/tabs.navigation';
import {
  mainScreenOptions,
  accountScreenOptions,
  newItemScreenOptions,
  typeOfPostScreenOptions,
} from './common/screen-options';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
const Stack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      <NativeStack.Screen
        name={RootScreenName.MAIN}
        component={MainNavigation}
        options={newItemScreenOptions}
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
            options={newItemScreenOptions}
          />
          <Stack.Screen
            name={RootScreenName.TYPE_OF_NEW_POST}
            component={TypeOfPostScreen}
            options={typeOfPostScreenOptions}
          />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };

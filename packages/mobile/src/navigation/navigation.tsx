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
  ProductInfo,
  SettingsScreen,
  SupportScreen,
  NewItemScreen,
  TypeOfPostScreen,
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

const productScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerLeft: () => <HeaderLeft label="List" />,
};

const Navigation: FC = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      <NativeStack.Screen
        name={RootScreenName.MAIN}
        component={MainNavigation}
      />
      <NativeStack.Group screenOptions={productScreenOptions}>
        <Stack.Screen name={RootScreenName.ITEM_INFO} component={ProductInfo} />
      </NativeStack.Group>
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
              headerLeft: () => (
                <HeaderLeft label={`${t('common:common.HOME')}`} />
              ),
              headerRight: HeaderSave,
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

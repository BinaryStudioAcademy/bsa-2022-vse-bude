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
  VerifyPhoneScreen,
  VerifyCodePhoneScreen,
  VerifyCodeEmailScreen,
  VerifiedPhoneScreen,
  VerifiedEmailScreen,
  TypeOfPostScreen,
} from '~/screens/screens';
import { HeaderLeft } from '~/components/components';
import { VerifyEmailScreen } from '~/screens/verify-screens/verify-screens';
import { HomeWithMenuNavigation } from './drawer/drawer.navigation';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
const Stack = createNativeStackNavigator<RootNavigationParamList>();

const mainScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const baseScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 16 },
  headerLeft: HeaderLeft,
};

const verifyScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigation: FC = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      <NativeStack.Screen
        name={RootScreenName.MAIN_WITH_MENU}
        component={HomeWithMenuNavigation}
      />
      <NativeStack.Group screenOptions={baseScreenOptions}>
        <Stack.Screen
          name={RootScreenName.ITEM_INFO}
          component={ProductInfo}
          options={{
            title: t('product_info.TITLE'),
          }}
        />
      </NativeStack.Group>
      {user && (
        <NativeStack.Group screenOptions={baseScreenOptions}>
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
          <NativeStack.Group screenOptions={verifyScreenOptions}>
            <Stack.Screen
              name={RootScreenName.VERIFY_PHONE}
              component={VerifyPhoneScreen}
            />
            <Stack.Screen
              name={RootScreenName.VERIFY_CODE_PHONE}
              component={VerifyCodePhoneScreen}
            />
            <Stack.Screen
              name={RootScreenName.VERIFIED_PHONE}
              component={VerifiedPhoneScreen}
            />
            <Stack.Screen
              name={RootScreenName.VERIFY_EMAIL}
              component={VerifyEmailScreen}
            />
            <Stack.Screen
              name={RootScreenName.VERIFY_CODE_EMAIL}
              component={VerifyCodeEmailScreen}
            />
            <Stack.Screen
              name={RootScreenName.VERIFIED_EMAIL}
              component={VerifiedEmailScreen}
            />
          </NativeStack.Group>
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

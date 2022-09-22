import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { useAppSelector, useTranslation } from '~/hooks/hooks';
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
  Filter,
  MyList,
} from '~/screens/screens';
import { HeaderLeft } from '~/components/components';
import { VerifyEmailScreen } from '~/screens/verify-screens/verify-screens';
import { HomeWithMenuNavigation } from './drawer/drawer.navigation';
import {
  mainScreenOptions,
  baseScreenOptions,
  verifyScreenOptions,
  createPostScreenOptions,
} from './screen-options/screen-options';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
const Stack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const { t } = useTranslation();

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
      <NativeStack.Screen name={RootScreenName.FILTER} component={Filter} />
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
          <Stack.Screen name={RootScreenName.MY_LIST} component={MyList} />
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
            options={createPostScreenOptions}
          />
          <Stack.Screen
            name={RootScreenName.NEW_AUCTION}
            component={NewItemScreen}
            options={createPostScreenOptions}
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

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
  FilterScreen,
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
        <NativeStack.Screen
          name={RootScreenName.ITEM_INFO}
          component={ProductInfo}
          options={{
            title: t('product_info.TITLE'),
          }}
        />
      </NativeStack.Group>
      <NativeStack.Screen
        name={RootScreenName.FILTER}
        component={FilterScreen}
        options={{
          presentation: 'modal',
          animation: 'fade_from_bottom',
          headerShown: true,
          headerTitleAlign: 'center',
          title: t('filter.TITLE'),
          headerTitleStyle: { fontSize: 16 },
          headerLeft: HeaderLeft,
        }}
      />
      {user && (
        <NativeStack.Group screenOptions={baseScreenOptions}>
          <NativeStack.Screen
            name={RootScreenName.PERSONAL_INFO}
            component={PersonalInfoScreen}
            options={{
              title: t('personal_info.PERSONAL_INFO'),
            }}
          />
          <NativeStack.Screen
            name={RootScreenName.SETTINGS}
            component={SettingsScreen}
          />
          <NativeStack.Screen
            name={RootScreenName.MESSAGES}
            component={MessagesScreen}
          />
          <NativeStack.Screen
            name={RootScreenName.SUPPORT}
            component={SupportScreen}
          />
          <NativeStack.Screen
            name={RootScreenName.MY_LIST}
            component={MyList}
          />
          <NativeStack.Group screenOptions={verifyScreenOptions}>
            <NativeStack.Screen
              name={RootScreenName.VERIFY_PHONE}
              component={VerifyPhoneScreen}
            />
            <NativeStack.Screen
              name={RootScreenName.VERIFY_CODE_PHONE}
              component={VerifyCodePhoneScreen}
            />
            <NativeStack.Screen
              name={RootScreenName.VERIFIED_PHONE}
              component={VerifiedPhoneScreen}
            />
            <NativeStack.Screen
              name={RootScreenName.VERIFY_EMAIL}
              component={VerifyEmailScreen}
            />
            <NativeStack.Screen
              name={RootScreenName.VERIFY_CODE_EMAIL}
              component={VerifyCodeEmailScreen}
            />
            <NativeStack.Screen
              name={RootScreenName.VERIFIED_EMAIL}
              component={VerifiedEmailScreen}
            />
          </NativeStack.Group>
          <NativeStack.Screen
            name={RootScreenName.NEW_ITEM}
            component={NewItemScreen}
            options={createPostScreenOptions}
          />
          <NativeStack.Screen
            name={RootScreenName.NEW_AUCTION}
            component={NewItemScreen}
            options={createPostScreenOptions}
          />
          <NativeStack.Screen
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

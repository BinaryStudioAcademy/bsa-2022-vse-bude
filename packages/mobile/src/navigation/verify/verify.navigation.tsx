import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { VerifyScreenName } from '~/common/enums/enums';
import { VerifyNavigationParamList } from '~/common/types/types';
import {
  VerifyPhoneScreen,
  VerifyCodeScreen,
  VerifiedScreen,
} from '~/screens/screens';

const VerifyNavigation: FC = () => {
  const NativeStack = createNativeStackNavigator<VerifyNavigationParamList>();
  const verifyScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NativeStack.Navigator screenOptions={verifyScreenOptions}>
      <NativeStack.Screen
        name={VerifyScreenName.VERIFY_PHONE}
        component={VerifyPhoneScreen}
      />
      <NativeStack.Screen
        name={VerifyScreenName.VERIFY_CODE}
        component={VerifyCodeScreen}
      />
      <NativeStack.Screen
        name={VerifyScreenName.VERIFIED}
        component={VerifiedScreen}
      />
    </NativeStack.Navigator>
  );
};

export { VerifyNavigation };

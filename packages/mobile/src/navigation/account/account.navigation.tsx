import React from 'react';

import { AccountScreenName } from '~/common/enums/enums';
import {
  PersonalInfoScreen,
  SettingsScreen,
  SupportScreen,
  Account,
  MessagesScreen,
} from '~/screens/screens';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { AccountNavigationParamList } from '~/common/types/types';
import { ColorPalette } from '@vse-bude/shared';
import { useNavigation, useTranslation } from '~/hooks/hooks';
import { RootNavigationProps } from '~/common/types/navigation/navigation-props';
import { ArrowLeftIcon, Text } from '~/components/components';
import { TouchableWithoutFeedback, View } from 'react-native';

const Stack = createNativeStackNavigator<AccountNavigationParamList>();

const AccountNavigation = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const { t } = useTranslation();

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={AccountScreenName.ACCOUNT_ROOT}
    >
      <Stack.Screen
        name={AccountScreenName.ACCOUNT_ROOT}
        component={Account}
        options={{
          headerTitle: t('account.ACCOUNT'),
          headerStyle: {
            backgroundColor: ColorPalette.GREEN_100,
          },
          headerTintColor: ColorPalette.WHITE_100,
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ArrowLeftIcon style={{ color: ColorPalette.YELLOW_100 }} />
                <Text style={{ color: ColorPalette.YELLOW_100 }}>
                  {t('common.HOME')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Stack.Screen
        name={AccountScreenName.PERSONAL_INFO}
        component={PersonalInfoScreen}
      />
      <Stack.Screen
        name={AccountScreenName.SETTINGS}
        component={SettingsScreen}
      />
      <Stack.Screen
        name={AccountScreenName.MESSAGES}
        component={MessagesScreen}
      />
      <Stack.Screen
        name={AccountScreenName.SUPPORT}
        component={SupportScreen}
      />
    </Stack.Navigator>
  );
};

export { AccountNavigation };

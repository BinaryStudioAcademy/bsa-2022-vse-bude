import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { t } from 'i18next';
import { HeaderCustom } from '~/components/components';

const mainScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const accountScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 16 },
};

const newItemScreenOptions: NativeStackNavigationOptions = {
  title: t('make_a_post.TITLE'),
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 17,
  },
  headerLeft: () => (
    <HeaderCustom label={t('common:common.HOME')} hasIcon={true} />
  ),
  headerRight: () => (
    <HeaderCustom label={t('common:components.BUTTON_SAVE')} />
  ),
};

const typeOfPostScreenOptions: NativeStackNavigationOptions = {
  title: t('make_a_post.TITLE'),
  headerLeft: () => <HeaderCustom />,
};

export {
  mainScreenOptions,
  accountScreenOptions,
  newItemScreenOptions,
  typeOfPostScreenOptions,
};

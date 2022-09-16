import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ButtonText, HeaderLeft } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { t } from 'i18next';

const getFilterScreenOptions = (
  onSavePress: () => void,
): NativeStackNavigationOptions => {
  return {
    headerShown: true,
    headerTitleAlign: 'center',
    title: t('filter.TITLE'),
    headerTitleStyle: { fontSize: 16 },
    headerLeft: () => <HeaderLeft />,
    headerRight: () => (
      <ButtonText
        textStyle={globalStyles.fs16}
        onPress={() => {
          onSavePress();
        }}
      >
        {t('common:components.BUTTON_SAVE')}
      </ButtonText>
    ),
  };
};

export { getFilterScreenOptions };

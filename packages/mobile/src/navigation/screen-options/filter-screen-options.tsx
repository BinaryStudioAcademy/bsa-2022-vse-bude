import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ButtonText, HeaderLeft } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { t } from 'i18next';
import { store } from '~/store/store';
import { products as productsApi } from '~/store/actions';
import { removeObjectFalsyFields } from '~/helpers/helpers';
import { RootState } from '~/common/types/types';
import { ProductQuery } from '@vse-bude/shared';

const onSavePress = () => {
  const { filters } = store.getState();
  store.dispatch(
    productsApi.loadProducts(
      removeObjectFalsyFields<RootState['filters'], ProductQuery>(filters),
    ),
  );
};

const filterScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  title: t('filter.TITLE'),
  headerTitleStyle: { fontSize: 16 },
  headerLeft: HeaderLeft,
  headerRight: () => (
    <ButtonText textStyle={globalStyles.fs16} onPress={onSavePress}>
      {t('common:components.BUTTON_SAVE')}
    </ButtonText>
  ),
};

export { filterScreenOptions };

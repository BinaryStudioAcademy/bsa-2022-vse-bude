import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ButtonText, HeaderLeft } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { t } from 'i18next';
// import { useAppSelector , useAppDispatch } from '~/hooks/hooks';
// import { selectFilters,selectProducts } from '~/store/selectors';
// import { products as productsApi } from '~/store/actions';

const getFilterScreenOptions = (): NativeStackNavigationOptions => {
  // const filters = useAppSelector(selectFilters);
  // const products = useAppSelector(selectProducts);
  // const dispatch = useAppDispatch();

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
          // dispatch(productsApi.loadProducts({ limit:10, ...filters }));
        }}
      >
        {t('common:components.BUTTON_SAVE')}
      </ButtonText>
    ),
  };
};

export { getFilterScreenOptions };

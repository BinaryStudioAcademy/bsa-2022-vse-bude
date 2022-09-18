import React from 'react';
import {
  ScreenWrapper,
  Product,
  FlatList,
  StatusBar,
  Header,
  ButtonText,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  useAppSelector,
  useAppDispatch,
  useCustomTheme,
  useEffect,
  useTranslation,
} from '~/hooks/hooks';
import { selectProducts } from '~/store/selectors';
import { products } from '~/store/actions';
import { CommonHeaderLeftComponents } from '~/common/enums/enums';
import { styles } from './styles';
import { ListHeader } from './components/components';

const ItemsAndServices = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(products.loadProducts({ limit: 20 }));
  }, []);
  const { colors } = useCustomTheme();
  const { items } = useAppSelector(selectProducts);
  const { t } = useTranslation();

  return (
    <ScreenWrapper>
      <Header
        commonLeftSideComponents={CommonHeaderLeftComponents.BURGER_MENU}
        RightSideComponent={() => (
          <ButtonText
            textStyle={globalStyles.fs16}
            onPress={() => {
              // TODO
            }}
          >
            {t('common:components.BUTTON_FILTER')}
          </ButtonText>
        )}
      />

      <StatusBar
        backgroundColor={colors.backgroundSecondary}
        barStyle="dark-content"
        translucent={false}
      />
      <FlatList
        ListHeaderComponent={ListHeader}
        style={globalStyles.px4}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product
            contentContainerStyle={[styles.productWrapper, globalStyles.mt4]}
            product={item}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export { ItemsAndServices };

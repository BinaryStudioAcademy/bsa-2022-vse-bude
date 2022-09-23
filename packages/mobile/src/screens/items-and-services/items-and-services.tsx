import React from 'react';
import { ProductQuery, ProductDto } from '@vse-bude/shared';
import {
  useTranslation,
  useAppSelector,
  useCustomTheme,
  useEffect,
  useAppDispatch,
  useCallback,
  useState,
  useRef,
} from '~/hooks/hooks';
import {
  ScreenWrapper,
  Product,
  FlatList,
  Spinner,
  RefreshControl,
  FocusAwareStatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  selectProducts,
  selectFilters,
  productsDataStatus,
} from '~/store/selectors';
import { products as productActions } from '~/store/actions';
import { DataStatus } from '~/common/enums/enums';
import { notification } from '~/services/services';
import { removeObjectFalsyFields } from '~/helpers/helpers';
import { RootState } from '~/common/types/types';
import { styles } from './styles';

const NUMBER_PER_PAGE = 10;

const initialParams: ProductQuery = {
  limit: NUMBER_PER_PAGE,
  from: 0,
};

const ItemsAndServices = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const dataStatus = useAppSelector(productsDataStatus);
  const { items, count } = useAppSelector(selectProducts);
  const { colors } = useCustomTheme();
  const isLoading = dataStatus === DataStatus.PENDING;
  const [params, setParams] = useState<ProductQuery>({
    ...initialParams,
    ...filters,
  });
  const isFirstRender = useRef(true);

  const loadProducts = useCallback(
    (paramsPayload: ProductQuery) => {
      dispatch(productActions.loadProducts(paramsPayload));
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    const parsedFilters = removeObjectFalsyFields<
      RootState['filters'],
      ProductQuery
    >(filters);

    setParams(() => ({
      ...initialParams,
      ...parsedFilters,
    }));
  }, [filters]);

  useEffect(() => {
    loadProducts(params);
  }, [params]);

  const handleRefresh = () => {
    setParams((prev) => ({
      ...prev,
      ...initialParams,
    }));
  };

  const handleEnd = (): void => {
    if (Number(params.from) >= count) {
      notification.success(t('items_and_services.END_COLLECTION'));

      return;
    }

    setParams((prev) => ({
      ...prev,
      from: Number(prev.from) + NUMBER_PER_PAGE,
    }));
  };

  const renderItem = useCallback(
    ({ item }: { item: ProductDto }) => (
      <Product
        contentContainerStyle={[styles.productWrapper, globalStyles.mt4]}
        product={item}
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item: ProductDto) => item.id, []);

  return (
    <ScreenWrapper>
      <FocusAwareStatusBar backgroundColor={colors.backgroundSecondary} />
      <FlatList
        style={globalStyles.px4}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={handleEnd}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            // colors={[AppColor.PRIMARY]}
            refreshing={isLoading}
            onRefresh={handleRefresh}
          />
        }
      />
      {isLoading && <Spinner />}
    </ScreenWrapper>
  );
};

export { ItemsAndServices };

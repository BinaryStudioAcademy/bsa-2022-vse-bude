import React, { FC, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { ProductType } from '@vse-bude/shared';
import { products as productsActions } from '~/store/actions';
import {
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useRoute,
} from '~/hooks/hooks';
import { DataStatus, RootScreenName } from '~/common/enums/enums';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
  Spinner,
  Countdown,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  selectCurrentProduct,
  selectCurrentUser,
  selectDataStatusProducts,
} from '~/store/selectors';
import dayjs from 'dayjs';
import {
  Description,
  ImageCarousel,
  LotPriceBlock,
  ProductPriceBlock,
  SellerInfo,
} from './components/components';

const ProductInfo: FC = () => {
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);
  const dataStatusProduct = useAppSelector(selectDataStatusProducts);
  const isLoading = dataStatusProduct === DataStatus.PENDING;
  const user = useAppSelector(selectCurrentUser);
  const route =
    useRoute<
      RouteProp<Pick<RootNavigationParamList, RootScreenName.ITEM_INFO>>
    >();
  const id = route.params?.itemId;

  useEffect(() => {
    dispatch(productsActions.loadProductInfo(id));
    dispatch(productsActions.updateProductViews(id));
  }, [id, dispatch]);

  if (!product || isLoading) {
    return <Spinner isOverflow={true} />;
  }

  const {
    title,
    currentPrice,
    price,
    minimalBid,
    type,
    imageLinks,
    views,
    author,
  } = product;
  const isAuction = type == ProductType.AUCTION;
  const isAuthor = user?.id === product.author.id;
  const today = dayjs();
  const isSold = today.diff(product.endDate) > 0 ? true : false;

  return (
    <ScreenWrapper>
      <StatusBar backgroundColor={colors.backgroundSecondary} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[globalStyles.px5, globalStyles.py6, globalStyles.mb6]}
      >
        {isAuction && <Countdown endDate={product.endDate} />}
        <Text
          style={[
            isAuction && globalStyles.mt6,
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
            { color: colors.text },
          ]}
        >
          {title}
        </Text>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            globalStyles.mt2,
          ]}
        >
          <EyeIcon size={15} color={colors.icon} />
          <Text
            style={[
              globalStyles.px3,
              globalStyles.fs12,
              { color: colors.icon },
            ]}
          >
            {views}
          </Text>
        </View>
        {imageLinks && <ImageCarousel imageLinks={imageLinks} />}
        <Description product={product} />
        <SellerInfo author={author} />
      </ScrollView>
      {isAuction ? (
        <LotPriceBlock
          id={id}
          currentPrice={currentPrice}
          minimalBid={minimalBid}
          isAuthor={isAuthor}
          isSold={isSold}
        />
      ) : (
        <ProductPriceBlock price={price} isAuthor={isAuthor} isSold={isSold} />
      )}
    </ScreenWrapper>
  );
};

export { ProductInfo };

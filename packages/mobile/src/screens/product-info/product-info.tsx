import React, { FC } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '~/common/types/types';
import { formatToDateTime } from '~/helpers/helpers';
import { useAppSelector, useCustomTheme, useRoute } from '~/hooks/hooks';
import { selectProductById } from '~/store/products/selectors';
import {
  ScreenWrapper,
  View,
  Text,
  EyeIcon,
  ScrollView,
  Spinner,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductType } from '@vse-bude/shared';
import {
  Description,
  ImageCarousel,
  LotPriceBlock,
  ProductPriceBlock,
  SellerInfo,
} from './components/components';

const ProductInfo: FC = () => {
  const route = useRoute<RouteProp<RootNavigationParamList>>();
  const { colors } = useCustomTheme();

  if (route.params?.itemId) {
    const id = route.params?.itemId;
    const product = useAppSelector((state) => selectProductById(state, id));
    const {
      title,
      description,
      price,
      minimalBid,
      city,
      type,
      status,
      endDate,
      imageLinks,
      views,
      currentPrice,
    } = product;
    const date = formatToDateTime(endDate);

    return (
      <ScreenWrapper>
        {/** TODO: add countdown for auction item component */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[globalStyles.px5, globalStyles.mb5]}
        >
          <Text
            style={[
              globalStyles.fs36,
              globalStyles.fontWeightExtraBold,
              globalStyles.py6,
              { color: colors.text },
            ]}
          >
            {title || ''}
          </Text>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
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
              {views.toString() || ''}
            </Text>
          </View>
          {imageLinks && <ImageCarousel imageLinks={imageLinks} />}
          <Description
            description={description}
            city={city || ''}
            status={status}
            date={date}
          />
          <SellerInfo />
        </ScrollView>
        {type == ProductType.AUCTION ? (
          <LotPriceBlock
            currentPrice={Number(currentPrice)}
            minimalBid={Number(minimalBid)}
          />
        ) : (
          <ProductPriceBlock price={Number(price)} />
        )}
      </ScreenWrapper>
    );
  }

  return <Spinner />;
};

export { ProductInfo };

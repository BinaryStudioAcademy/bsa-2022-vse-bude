import React, { FC } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { ProductType, ProductStatus, ProductDto } from '@vse-bude/shared';
import { RootNavigationParamList } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
import {
  useTranslation,
  useCustomTheme,
  useNavigation,
  useAppDispatch,
} from '~/hooks/hooks';
import { formatPrice, getTimeToEvent } from '~/helpers/helpers';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { StyleProp, ViewStyle } from 'react-native';
import { products } from '~/store/actions';
import { styles } from './styles';
import { TimeWindow } from './components/components';

type Props = {
  product: ProductDto;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const Product: FC<Props> = ({ product, contentContainerStyle }) => {
  const {
    id,
    imageLinks,
    title,
    description,
    price,
    type,
    endDate,
    createdAt,
    status,
  } = product;
  const timeToAuctionEnd = getTimeToEvent(endDate);
  const createdAtDate = getTimeToEvent(createdAt);
  const isAuction = type === ProductType.AUCTION;
  const isActive = status === ProductStatus.ACTIVE;
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();

  const handleOpenProductInfo = () => {
    dispatch(products.loadProductInfo(id));
    navigation.navigate(RootScreenName.ITEM_INFO, { itemId: id });
  };

  return (
    <>
      {isActive && (
        <TouchableOpacity
          onPress={handleOpenProductInfo}
          style={[
            styles.container,
            globalStyles.boxShadow,
            contentContainerStyle,
          ]}
        >
          <View style={styles.imgWrapper}>
            <Image source={{ uri: imageLinks[0] }} style={styles.img} />

            {isAuction && (
              <TimeWindow
                duration={timeToAuctionEnd}
                style={styles.timeWindow}
              />
            )}
          </View>
          <View>
            <Text
              style={[
                globalStyles.fs16,
                globalStyles.fontWeightBold,
                styles.title,
                { color: colors.titleSecondary },
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={[globalStyles.fs14, globalStyles.fontWeightRegular]}
              numberOfLines={2}
            >
              {description}
            </Text>
            {!isAuction && (
              <Text style={[globalStyles.fs12, globalStyles.mt2]}>
                {createdAtDate}
              </Text>
            )}
          </View>
          <View style={[styles.divider, { backgroundColor: colors.line }]} />
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyContentSpaceBetween,
              globalStyles.flex1,
            ]}
          >
            <Text
              style={[
                globalStyles.fs16,
                globalStyles.fontWeightBold,
                { color: colors.titleSecondary },
              ]}
            >{`${formatPrice(price)} ${t('common:currency.UAH')}`}</Text>
            <Button
              label={
                isAuction
                  ? t('common:components.BUTTON_BID')
                  : t('common:components.BUTTON_BUY')
              }
              onPress={handleOpenProductInfo}
            ></Button>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export { Product };

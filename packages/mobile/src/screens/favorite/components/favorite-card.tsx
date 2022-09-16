import React, { FC, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ProductStatus } from '@vse-bude/shared';
import { FavoritesMappedData, RootNavigationProps } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
import { products } from '~/store/actions';
import {
  useTranslation,
  useCustomTheme,
  useNavigation,
  useAppDispatch,
} from '~/hooks/hooks';
import { formatPrice } from '~/helpers/helpers';
import {
  Image,
  Spinner,
  Text,
  TouchableOpacity,
  TrashCanIcon,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  product: FavoritesMappedData;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const FavoriteCard: FC<Props> = ({ product, contentContainerStyle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const { id, imageLinks, title, description, price, status } = product;
  const isActive = status === ProductStatus.ACTIVE;

  const handleOpenProductInfo = () => {
    dispatch(products.loadProductInfo(id));
    navigation.navigate(RootScreenName.ITEM_INFO, { itemId: id });
  };
  const handleDelete = () => {
    setIsLoading(true);
    dispatch(products.deleteFromFavorite(id))
      .unwrap()
      .then(() => dispatch(products.fetchFavorites({ limit: 10 })))
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={globalStyles.alignItemsCenter}>
      <TouchableOpacity
        onPress={handleOpenProductInfo}
        style={[
          styles.container,
          globalStyles.boxShadow,
          contentContainerStyle,
          !isActive && { opacity: 0.6 },
        ]}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <View style={styles.imgWrapper}>
              <Image source={{ uri: imageLinks[0] }} style={styles.img} />
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
            </View>
            <View style={[styles.divider, { backgroundColor: colors.line }]} />
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
                globalStyles.justifyContentSpaceBetween,
                globalStyles.flex1,
                globalStyles.mr3,
              ]}
            >
              <Text
                style={[
                  globalStyles.fs16,
                  globalStyles.fontWeightBold,
                  { color: colors.titleSecondary },
                ]}
              >
                {isActive
                  ? `${formatPrice(price)} ${t('common:currency.UAH')}`
                  : 'SOLD'}
              </Text>
              <TrashCanIcon onPress={handleDelete} size={20} />
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export { FavoriteCard };

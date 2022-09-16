import React, { FC } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { ProductStatus } from '@vse-bude/shared';
import { RootNavigationParamList } from '~/common/types/types';
import { RootScreenName } from '~/common/enums/enums';
import {
  useTranslation,
  useCustomTheme,
  useNavigation,
  useAppDispatch,
} from '~/hooks/hooks';
import { formatPrice } from '~/helpers/helpers';
import { Image, Text, TouchableOpacity, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { StyleProp, ViewStyle } from 'react-native';
import { products } from '~/store/actions';
import { RenderFavorites } from '../favorite';
import { styles } from './styles';

type Props = {
  product: RenderFavorites;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const FavoriteCard: FC<Props> = ({ product, contentContainerStyle }) => {
  const { id, imageLinks, title, description, price, status } = product;
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();

  const handleOpenProductInfo = () => {
    dispatch(products.loadProductInfo(id));
    navigation.navigate(RootScreenName.ITEM_INFO, { itemId: id });
  };
  const isActive = status === ProductStatus.ACTIVE;

  return (
    <>
      {isActive ? (
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
            ]}
          >
            <Text
              style={[
                globalStyles.fs16,
                globalStyles.fontWeightBold,
                { color: colors.titleSecondary },
              ]}
            >{`${formatPrice(price)} ${t('common:currency.UAH')}`}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.container,
            globalStyles.boxShadow,
            contentContainerStyle,
            { opacity: 0.5 },
          ]}
        >
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
            ]}
          >
            <Text
              style={[
                globalStyles.fs16,
                globalStyles.fontWeightBold,
                { color: colors.titleSecondary },
              ]}
            >{`${formatPrice(price)} ${t('common:currency.UAH')}`}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export { FavoriteCard };

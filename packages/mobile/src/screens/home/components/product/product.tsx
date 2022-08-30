import React, { FC } from 'react';
import { useTranslation, useAppSelector, useCustomTheme } from '~/hooks/hooks';
import { selectProductById } from '~/store/products/selectors';
import { Button, ClockIcon, Image, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductType, ProductDto } from '@vse-bude/shared';
import { formatPrice, getTimeToEvent } from '~/helpers/helpers';
import { styles } from './styles';

type Props = {
  productId: string;
};

const Product: FC<Props> = ({ productId }) => {
  const { imageLinks, title, description, price, type, endDate } =
    useAppSelector((state) =>
      selectProductById(state, productId),
    ) as ProductDto;
  const duration = getTimeToEvent(endDate);
  const auction = ProductType.AUCTION;
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, globalStyles.boxShadow]}>
      <View style={[styles.imgWrapper, { backgroundColor: colors.card }]}>
        <Image source={{ uri: imageLinks[0] }} style={styles.img} />

        {type === auction && (
          <View
            style={[
              styles.time,
              globalStyles.boxShadow,
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyContentCenter,
              { backgroundColor: colors.whiteColor, borderColor: colors.line },
            ]}
          >
            <ClockIcon style={globalStyles.mr2} />
            <Text style={globalStyles.fs12}>{duration}</Text>
          </View>
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
        {type === ProductType.SELLING && (
          <Text style={[globalStyles.fs12, globalStyles.mt2]}>{duration}</Text>
        )}
      </View>
      <View style={[styles.divider, { backgroundColor: colors.line }]} />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentSpaceBetween,
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
            type === auction
              ? t('common:components.BUTTON_BID')
              : t('common:components.BUTTON_BUY')
          }
          onPress={() => {
            //TODO
          }}
        ></Button>
      </View>
    </View>
  );
};

export { Product };

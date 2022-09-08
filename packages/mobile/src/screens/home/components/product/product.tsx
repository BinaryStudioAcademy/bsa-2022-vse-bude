import React, { FC } from 'react';
import { useTranslation, useAppSelector, useCustomTheme } from '~/hooks/hooks';
import { selectProductById } from '~/store/selectors';
import { Button, Image, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ProductType } from '@vse-bude/shared';
import { formatPrice, getTimeToEvent } from '~/helpers/helpers';
import { ProductStatus } from '~/common/enums/enums';
import { styles } from './styles';
import { TimeWindow } from './components/components';

type Props = {
  productId: string;
};

const Product: FC<Props> = ({ productId }) => {
  const {
    imageLinks,
    title,
    description,
    price,
    type,
    endDate,
    createdAt,
    status,
  } = useAppSelector((state) => selectProductById(state, productId));
  const timeToAuctionEnd = getTimeToEvent(endDate);
  const createdAtDate = getTimeToEvent(createdAt);
  const isAuction = type === ProductType.AUCTION;
  const isActive = status === ProductStatus.ACTIVE;
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, globalStyles.boxShadow]}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri: imageLinks[0] }} style={styles.img} />

        {isAuction && isActive && (
          <TimeWindow
            duration={timeToAuctionEnd}
            style={{ position: 'absolute', bottom: -10, alignSelf: 'center' }}
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
        {isActive && (
          <Button
            label={
              isAuction
                ? t('common:components.BUTTON_BID')
                : t('common:components.BUTTON_BUY')
            }
            onPress={() => {
              //TODO
            }}
          ></Button>
        )}
      </View>
    </View>
  );
};

export { Product };

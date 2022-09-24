import React, { FC, useEffect } from 'react';
import {
  ColorPalette,
  ProductDto,
  UpdateProductPriceEvent,
  UPDATE_PRODUCT_PRICE,
} from '@vse-bude/shared';
import {
  useAppForm,
  useAppSelector,
  useCustomTheme,
  useTranslation,
  useState,
  useAppDispatch,
} from '~/hooks/hooks';
import {
  PrimaryButton,
  StarIcon,
  Text,
  View,
  Input,
  CrossIcon,
  PlusIcon,
} from '~/components/components';
import { getBidValidationSchema } from '~/validation-schemas/bid/make-bid';
import { globalStyles } from '~/styles/styles';
import { products as productsActions } from '~/store/actions';
import { selectCurrentUser } from '~/store/selectors';
import {
  auctionMakeBidStatus,
  selectPermission,
} from '~/store/products/selectors';
import { TouchableHighlight } from 'react-native';
import { notification, socketApi } from '~/services/services';
import { DataStatus } from '~/common/enums/app/data-status.enum';
import { DEFAULT_BID_VALUE } from '../../common/constants';
import { PriceWrapper } from './price-wrapper';
import { styles } from './styles';
import { AuctionLeaveModal } from './auction-leave-modal';

type LotPriceBlockProps = Pick<
  ProductDto,
  'id' | 'currentPrice' | 'minimalBid'
>;

const LotPriceBlock: FC<LotPriceBlockProps> = ({
  id,
  currentPrice,
  minimalBid,
}) => {
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { control, errors, handleSubmit, setValue } = useAppForm({
    defaultValues: DEFAULT_BID_VALUE,
    validationSchema: getBidValidationSchema(Number(minimalBid), t),
  });
  const { isAbleToLeaveAuction } = useAppSelector(selectPermission);
  const user = useAppSelector(selectCurrentUser);
  const [confirmModalVisible, setModalVisible] = useState(false);
  const dataAuctionMakeBidStatus = useAppSelector(auctionMakeBidStatus);
  const isLoading = [dataAuctionMakeBidStatus].includes(DataStatus.PENDING);
  const canUserMakeBid = Boolean(
    user && user?.phoneVerified && user?.emailVerified && !isLoading,
  );
  const showModalLeaveAuction = Boolean(
    !!isAbleToLeaveAuction && confirmModalVisible,
  );

  useEffect(() => {
    const socket = socketApi.getAuctionItemIo(id);
    socket.on(UPDATE_PRODUCT_PRICE, (data: UpdateProductPriceEvent) => {
      dispatch(productsActions.updateCurrentItemPrice(data));
      dispatch(productsActions.auctionPermissions(id));
      if (data.bidderId !== user?.id || !user) {
        notification.info(t('screens:product_info.NEW_BID'));
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [id, dispatch]);

  const handleMakeBidPress = (payload: { bid: number }) => {
    dispatch(
      productsActions.auctionMakeBid({
        price: Number(payload.bid),
        productId: id,
      }),
    )
      .unwrap()
      .then(async () => {
        notification.success(t('screens:product_info.BID_SAVED'));
        await dispatch(productsActions.auctionPermissions(id));
      });
    setValue('bid', 0);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOnLeaveAuction = async () => {
    dispatch(productsActions.auctionLeaveAction(id))
      .unwrap()
      .then(() => {
        notification.success(t('screens:product_info.LEAVE_SUCCESS'));
        dispatch(productsActions.loadProductInfo(id));
        dispatch(productsActions.auctionPermissions(id));
      });
    closeModal();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const placeholderText = `${t('screens:product_info.MIN')} ${
    Number(minimalBid) + Number(currentPrice)
  } ${t('common:currency.UAH')}`;

  return (
    <>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter,
          styles.currentBid,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <Text
          style={[
            globalStyles.mr3,
            globalStyles.fs12,
            { color: colors.subtitle },
          ]}
        >
          {t('screens:product_info.CURRENT_BID')}
        </Text>
        <Text
          style={[
            globalStyles.ml3,
            globalStyles.fs22,
            globalStyles.fontWeightExtraBold,
            { color: colors.titleSecondary },
          ]}
        >
          {`${currentPrice} ${t('common:currency.UAH')}`}
        </Text>
      </View>
      <PriceWrapper>
        <>
          <Input
            name="bid"
            control={control}
            errors={errors}
            placeholder={placeholderText}
            editable={canUserMakeBid}
            contentContainerStyle={styles.input}
          />
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}
          >
            {!!isAbleToLeaveAuction && user && (
              <TouchableHighlight
                onPress={openModal}
                style={[
                  globalStyles.justifyContentCenter,
                  globalStyles.alignItemsCenter,
                  globalStyles.flexDirectionRow,
                  globalStyles.mr3,
                  globalStyles.ml3,
                  styles.iconBorder,
                  styles.leaveBtn,
                ]}
              >
                <CrossIcon color={ColorPalette.WHITE_100} size={25} />
              </TouchableHighlight>
            )}
            <View style={styles.btnWidth}>
              <PrimaryButton
                iconLeft={<PlusIcon size={10} color={colors.whiteColor} />}
                isLoading={isLoading}
                onPress={handleSubmit(handleMakeBidPress)}
                label={`${t('common:components.BUTTON_BID')}`}
                disabled={!canUserMakeBid}
              />
            </View>
            <View style={[globalStyles.ml5, styles.iconBorder]}>
              <StarIcon
                size={25}
                color={ColorPalette.YELLOW_200}
                style={styles.icon}
              />
            </View>
          </View>
        </>
      </PriceWrapper>

      {showModalLeaveAuction && (
        <AuctionLeaveModal
          onCancel={closeModal}
          onConfirm={handleOnLeaveAuction}
          isVisible={confirmModalVisible}
        />
      )}
    </>
  );
};

export { LotPriceBlock };

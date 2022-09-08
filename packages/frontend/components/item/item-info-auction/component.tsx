import type { CreateBidRequest, ItemDto } from '@vse-bude/shared';
import { Button, Input, Loader, Tooltip } from '@primitives';
import dynamic from 'next/dynamic';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { useEffect, useState } from 'react';
import { IconColor } from '@enums';
import {
  auctionLeaveAction,
  auctionPermissions,
  makeBid,
  updateCurrentItemPrice,
} from 'store/product';
import { UPDATE_PRODUCT_PRICE } from '@vse-bude/shared';
import { getAuctionItemIo } from '@helpers';
import { useRouter } from 'next/router';
import { CountDownTimer } from '../countdown-timer/component';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import { minBidValidation } from '../validation';
import { addToast } from '../../../store/toast/actions';
import * as styles from './styles';

const ConfirmationModal = dynamic(
  () => import('@components/modal/confirm/component'),
);

interface ItemInfoAuctionProps {
  item: ItemDto;
  isInFavorite: boolean;
  onChangeIsFavorite: () => void;
}

export const ItemInfoAuction = ({
  item,
  isInFavorite,
  onChangeIsFavorite,
}: ItemInfoAuctionProps) => {
  const [confirmModalVisible, setModalVisible] = useState(false);
  const { push } = useRouter();
  const { t } = useTranslation();
  const { user } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = getAuctionItemIo(item.id);
    socket.on(UPDATE_PRODUCT_PRICE, (data) => {
      dispatch(updateCurrentItemPrice(+data.price));
      if (data.bidderId !== user?.id || !user) {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.newBidPlaced'),
          }),
        );
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [item.id, user, dispatch]);

  const targetDate = new Date(item.endDate);
  const minBidAmount = +item.currentPrice + +item.minimalBid + 1;

  const {
    permissions: { isAbleToLeaveAuction },
  } = useTypedSelector((state) => state.product);
  const { loading } = useTypedSelector((state) => state.product);
  const isAuthor = user?.id === item.author.id;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateBidRequest>({
    resolver: joiResolver(minBidValidation(+minBidAmount, t)),
  });

  const onMakeBid: SubmitHandler<CreateBidRequest> = (data) => {
    dispatch(
      makeBid({
        price: data.price,
        productId: item.id,
      }),
    )
      .unwrap()
      .then(() => {
        setValue('price', null);
      });
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  const confirmLeave = () => {
    setModalVisible(true);
  };

  const onLeaveAuction = async () => {
    const reqData = {
      productId: item.id,
    };

    await dispatch(auctionLeaveAction(reqData));
    await dispatch(auctionPermissions(reqData));
    onCancel();
  };

  const renderEditButton = () => (
    <Button onClick={() => push(`/items/edit/${item.id}`)}>{t('item:buttons.editBtn')}</Button>
  );

  const renderBidButtons = () => (
    <>
      <Tooltip
        trigger={
          <FavoriteButton
            cssExtended={styles.favouriteButton}
            onChangeIsFavorite={onChangeIsFavorite}
            isFavorite={isInFavorite}
            backgroundColor="transparent"
            inFavouriteColor={IconColor.YELLOW}
            notInFavouriteColor={IconColor.YELLOW}
            size="md"
            disabled={!user}
          />
        }
      >
        {user
          ? isInFavorite
            ? t('item:buttons.tooltips.favBtnRemove')
            : t('item:buttons.tooltips.favBtn')
          : t('item:buttons.tooltips.notAuthorized.favBtn')}
      </Tooltip>
      <Button
        type="submit"
        disabled={!user || !user.phoneVerified || loading}
        tooltip={
          user
            ? user.phoneVerified
              ? t('item:buttons.placeBid')
              : t('item:buttons.tooltips.notVerified.placeBid')
            : t('item:buttons.tooltips.notAuthorized.placeBid')
        }
      >
        {loading ? <Loader size="extraSmall" /> : t('item:buttons.placeBid')}
      </Button>
      {!!isAbleToLeaveAuction && user && (
        <Button
          onClick={confirmLeave}
          variant="danger"
          tooltip={t('item:leave.tooltip')}
        >
          {t('leave.btnText')}
        </Button>
      )}
    </>
  );

  return (
    <div css={styles.wrapper}>
      <div css={styles.priceTimerWrapper}>
        <CountDownTimer targetDate={targetDate} />
        <div css={styles.priceWrapper}>
          <ItemPrice
            currency={t('public:uah')}
            amount={item.currentPrice}
            cssExtended={styles.price}
          />
          <span>{t('item:currentBid')}</span>
        </div>
      </div>
      <ItemTitle title={item.title} views={item.views} />
      <ItemInfo item={item} />
      <form
        onSubmit={handleSubmit(onMakeBid)}
        css={[styles.controls, isAuthor && styles.editButton]}
      >
        {!isAuthor && (
          <div css={styles.inputWrapper}>
            <Input
              {...register('price')}
              variant="primary"
              type="text"
              placeholder={t('item:bidInput')}
              error={errors.price?.message}
            />
            <span>{t('item:bidInputCaption')} </span>
            <span>
              {t('public:uah')} {minBidAmount}
            </span>
          </div>
        )}

        <div css={styles.buttons}>
          {isAuthor ? renderEditButton() : renderBidButtons()}
        </div>
      </form>

      {!!isAbleToLeaveAuction && confirmModalVisible && (
        <ConfirmationModal
          onClose={onCancel}
          onConfirm={onLeaveAuction}
          text={t('item:leave.confirmText')}
        />
      )}
    </div>
  );
};

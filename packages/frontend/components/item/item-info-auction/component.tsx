import type { CreateBidRequest, ItemDto } from '@vse-bude/shared';
import { Button, Input, Loader, Tooltip } from '@primitives';
import dynamic from 'next/dynamic';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { useState } from 'react';
import { IconColor } from '@enums';
import { auctionLeaveAction, auctionPermissions, makeBid } from 'store/product';
import { CountDownTimer } from '../countdown-timer/component';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import { minBidValidation } from '../validation';
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

  const { t } = useTranslation('item');

  const dispatch = useAppDispatch();

  const targetDate = new Date(item.endDate);
  const minBidAmount = +item.currentPrice + +item.minimalBid + 1;

  const {
    permissions: { isAbleToLeaveAuction },
  } = useTypedSelector((state) => state.product);
  const { user } = useTypedSelector((state) => state.auth);
  const { loading } = useTypedSelector((state) => state.product);

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

  return (
    <div css={styles.wrapper}>
      <div css={styles.priceTimerWrapper}>
        <CountDownTimer targetDate={targetDate} />
        <div css={styles.priceWrapper}>
          <ItemPrice
            currency="UAH"
            amount={item.currentPrice}
            cssExtended={styles.price}
          />
          <span>{t('currentBid')}</span>
        </div>
      </div>
      <ItemTitle title={item.title} views={item.views} />
      <ItemInfo item={item} />
      <form onSubmit={handleSubmit(onMakeBid)} css={styles.controls}>
        <div css={styles.inputWrapper}>
          <Input
            {...register('price')}
            variant="primary"
            type="text"
            placeholder={t('bidInput')}
            error={errors.price?.message}
          />
          <span>{t('bidInputCaption')} </span>
          <span>UAH {minBidAmount}</span>
        </div>

        <div css={styles.buttons}>
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
                ? t('buttons.tooltips.favBtnRemove')
                : t('buttons.tooltips.favBtn')
              : t('buttons.tooltips.notAuthorized.favBtn')}
          </Tooltip>
          <Button
            type="submit"
            disabled={!user || !user.phoneVerified || loading}
            tooltip={
              user
                ? user.phoneVerified
                  ? t('buttons.placeBid')
                  : t('buttons.tooltips.notVerified.placeBid')
                : t('buttons.tooltips.notAuthorized.placeBid')
            }
          >
            {loading ? <Loader size="extraSmall" /> : t('buttons.placeBid')}
          </Button>
          {!!isAbleToLeaveAuction && user && (
            <Button
              onClick={confirmLeave}
              variant="danger"
              tooltip={t('leave.tooltip')}
            >
              {t('leave.btnText')}
            </Button>
          )}
        </div>
      </form>

      {!!isAbleToLeaveAuction && confirmModalVisible && (
        <ConfirmationModal
          onClose={onCancel}
          onConfirm={onLeaveAuction}
          text={t('leave.confirmText')}
        />
      )}
    </div>
  );
};

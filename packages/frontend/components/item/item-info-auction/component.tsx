import type { CreateBidRequest, ItemDto } from '@vse-bude/shared';
import { Button, Input } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTypedSelector } from '@hooks';
import { useState } from 'react';
import { CountDownTimer } from '../countdown-timer/component';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import { minBidValidation } from '../validation';
import { ConfirmationModal } from '../../modal/confirm/component';
import * as styles from './styles';

interface ItemInfoAuctionProps {
  item: ItemDto;
  isInFavorite: boolean;
  onBid: (data: CreateBidRequest) => void;
  onChangeIsFavorite: () => void;
}

export const ItemInfoAuction = ({
  item,
  isInFavorite,
  onBid,
  onChangeIsFavorite,
}: ItemInfoAuctionProps) => {
  const [confirmModalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation('item');

  const targetDate = new Date(item.endDate);
  const minBidAmount = +item.currentPrice + +item.minimalBid + 1;

  const {
    permissions: { isAbleToLeaveAuction },
  } = useTypedSelector((state) => state.auction);
  const { user } = useTypedSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBidRequest>({
    resolver: joiResolver(minBidValidation(+minBidAmount, t)),
  });

  const onMakeBid: SubmitHandler<CreateBidRequest> = (data) => {
    onBid(data);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  const onLeaveAuction = () => {
    setModalVisible(true);
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
      <form onSubmit={handleSubmit(onMakeBid)} css={styles.controlls}>
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
          <Button type="submit">{t('placeBidBtn')}</Button>
          <FavoriteButton
            cssExtended={styles.favouriteButton}
            onChangeIsFavorite={onChangeIsFavorite}
            isFavorite={isInFavorite}
            backgroundColor="transparent"
            size="md"
          ></FavoriteButton>
        </div>
      </form>
      {!!isAbleToLeaveAuction && user && (
        <div css={styles.leaveAuctionBlock}>
          <Button
            onClick={onLeaveAuction}
            variant="danger"
            tooltip="You will be excluded from the auction and all your bids are deleted!"
          >
            Leave Auction
          </Button>
        </div>
      )}
      {!!isAbleToLeaveAuction && confirmModalVisible && (
        <ConfirmationModal onClose={onCancel} />
      )}
    </div>
  );
};

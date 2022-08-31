import type { ItemDto } from '@vse-bude/shared';
import { Button, Input } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { CountDownTimer } from '../countdown-timer/component';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';

interface ItemInfoAuctionProps {
  item: ItemDto;
  isInFavorite: boolean;
  onBid: () => void;
  onChangeIsFavorite: () => void;
}

export const ItemInfoAuction = ({
  item,
  isInFavorite,
  onBid,
  onChangeIsFavorite,
}: ItemInfoAuctionProps) => {
  const { t } = useTranslation('item');

  const targetDate = new Date('2022-11-17T03:24:00');

  const inputBidRef = useRef<HTMLInputElement>(null);

  const minBidAmount = +item.currentPrice + +item.minimalBid + 1;

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
      <div css={styles.controlls}>
        <div css={styles.inputWrapper}>
          <Input
            variant="primary"
            type="text"
            ref={inputBidRef}
            placeholder={t('bidInput')}
          />
          <span>{t('bidInputCaption')} </span>
          <span>UAH {minBidAmount}</span>
        </div>

        <div css={styles.buttons}>
          <Button onClick={onBid}>{t('placeBidBtn')}</Button>
          <FavoriteButton
            cssExtended={styles.favouriteButton}
            onChangeIsFavorite={onChangeIsFavorite}
            isFavorite={isInFavorite}
            backgroundColor="transparent"
            size="md"
          ></FavoriteButton>
        </div>
      </div>
    </div>
  );
};

import type { ItemDto } from '@vse-bude/shared';
import { Button, Input } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useRef } from 'react';
import { CountDownTimer } from '../countdown-timer/component';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';

interface ItemInfoAuctionProps {
  item: ItemDto;
  onBid: () => void;
  onChangeIsFavorite: () => void;
}

export const ItemInfoAuction = ({
  item,
  onBid,
  onChangeIsFavorite,
}: ItemInfoAuctionProps) => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);

  const inputBidRef = useRef<HTMLInputElement>(null);

  return (
    <div css={styles.wrapper}>
      <div css={styles.priceTimerWrapper}>
        <CountDownTimer targetDate={targetDate} />
        <div css={styles.priceWrapper}>
          <ItemPrice
            currency="UAH"
            amount={item.minimalBid}
            cssExtended={styles.price}
          />
          <span>Current bid</span>
        </div>
      </div>
      <ItemTitle title={item.title} />
      <ItemInfo item={item} />
      <div css={styles.controlls}>
        <div css={styles.inputWrapper}>
          <Input
            variant="primary"
            type="text"
            ref={inputBidRef}
            placeholder="Enter the bid amount"
          />
          <span>Enter more than or equal to: </span>
          <span>UAH {+item.minimalBid + 1}</span>
        </div>

        <div css={styles.buttons}>
          <Button onClick={onBid}>Place bid</Button>
          <FavoriteButton
            cssExtended={styles.favouriteButton}
            onChangeIsFavorite={onChangeIsFavorite}
            isFavorite={false}
            backgroundColor="transparent"
            size="md"
          ></FavoriteButton>
        </div>
      </div>
    </div>
  );
};

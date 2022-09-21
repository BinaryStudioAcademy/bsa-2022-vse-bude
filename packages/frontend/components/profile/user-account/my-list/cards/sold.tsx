import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { IconColor, IconName } from '@enums';
import { IconButton } from '@components/primitives';
import { useRouter } from 'next/router';
import { ApiRoutes } from '@vse-bude/shared';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ProfileLink,
  ItemDate,
  ItemType,
  Tooltip,
} from '../primitives';
import { Charity } from '../tmp-element-charity';
import type { CardProps } from './types';
import * as styles from './styles';

export const Sold = ({ data }: CardProps) => {
  const [showSeeItemTooltip, setSeeItemTooltip] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const {
    id: itemId,
    title,
    imageLinks,
    price,
    winner,
    updatedAt,
    type,
  } = data;
  const { id, avatar, firstName, lastName } = winner;

  const onSeeItemClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${itemId}`);
  };

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
          <ItemDate size="lg" time={updatedAt} />
          <div css={styles.buttonWrapper}>
            {showSeeItemTooltip ? (
              <Tooltip>{t('my-list:card.tooltip-seeItem')}</Tooltip>
            ) : null}
            <IconButton
              ariaLabel="delete"
              backgroundColor="darkgray"
              color={IconColor.GRAY}
              icon={IconName.ITEM_CARD}
              size="sm"
              onClick={onSeeItemClick}
              onMouseEnter={() => setSeeItemTooltip(true)}
              onMouseLeave={() => setSeeItemTooltip(false)}
            />
          </div>
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.sold')} />
              <ItemType type={type} />
            </div>
            <ProfileLink
              userStatus={t('my-list:card.buyer')}
              id={id}
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
            />
          </div>
          <Charity />
        </div>
      </div>
    </div>
  );
};

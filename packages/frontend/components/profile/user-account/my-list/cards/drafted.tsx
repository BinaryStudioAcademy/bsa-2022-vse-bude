import { useTranslation } from 'next-i18next';
import { IconButton, Button } from '@primitives';
import { IconColor, IconName } from '@enums';
import type { ProductPost } from '@vse-bude/shared';
import { ApiRoutes, ProductApiRoutes } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks';
import { addItemToPosted } from '@store';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  ItemDate,
} from '../primitives';
import type { ItemCard } from './types';
import * as styles from './styles';

export const Drafted = ({ data }: { data: ItemCard }) => {
  const { id, title, imageLinks, price, description, updatedAt } = data;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const onPostClick = () => {
    const reqDto: ProductPost = {
      itemId: id,
      postDate: new Date().toISOString(),
    };
    dispatch(addItemToPosted({ data: reqDto }));
  };

  const onEditClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${ProductApiRoutes.EDIT}/${id}`);
  };

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.drafted')} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <div>
              <span css={styles.editDate}>{t('my-list:card.edit')}</span>
              <ItemDate time={updatedAt} />
            </div>
            <div css={styles.publishButtonWrapper}>
              <Button onClick={onPostClick} size="small">
                {t('my-list:card.publish')}
              </Button>
            </div>
            <IconButton
              ariaLabel="edit"
              backgroundColor="lightgray"
              color={IconColor.GRAY}
              icon={IconName.PENCIL}
              size="sm"
              onClick={onEditClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

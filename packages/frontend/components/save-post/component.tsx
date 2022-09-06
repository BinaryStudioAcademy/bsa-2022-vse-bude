import { useTranslation } from 'next-i18next';
import { Container } from '@primitives';
import { ProductType } from '@vse-bude/shared';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { useEffect } from 'react';
import { addToast } from 'store/toast/actions';
import { NestedLayout } from '../profile/user-account/common';
import type { SavePostProps } from './types';
import AuctionForm from './auction-form';
import ProductForm from './product-form';
import * as styles from './styles';

export const SavePost = ({ type, edit }: SavePostProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const user = useTypedSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) return;
    if (!user.phoneVerified || !user.emailVerified) {
      dispatch(
        addToast({
          level: 'warning',
          description: t('create-post:notification.notVerified'),
        }),
      );
    }
  }, [t, dispatch, user]);

  const title = edit
    ? t('create-post:headline.editPost')
    : t('create-post:headline.makePost');

  return (
    <NestedLayout>
      <Container>
        <h3 css={styles.pageHeader}>{title}</h3>
        <div css={styles.form}>
          <div css={styles.sections}>
            {type === ProductType.AUCTION && <AuctionForm edit={edit} />}
            {type === ProductType.SELLING && <ProductForm edit={edit} />}
          </div>
        </div>
      </Container>
    </NestedLayout>
  );
};

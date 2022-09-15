import { useTranslation } from 'next-i18next';
import { Container } from '@primitives';
import { ProductType } from '@vse-bude/shared';
import { useTypedSelector } from '@hooks';
import PhoneNotVerificatedWarning from '@components/phone-verification/not-verificated-warning/component';
import EmailNotVerificatedWarning from '@components/email-verification/not-verificated-warning/component';
import { NestedLayout } from '../profile/user-account/common';
import type { SavePostProps } from './types';
import AuctionForm from './auction-form';
import ProductForm from './product-form';
import * as styles from './styles';

export const SavePost = ({ type, edit }: SavePostProps) => {
  const { t } = useTranslation();
  const { emailVerified, phoneVerified } = useTypedSelector(
    (state) => state.auth.user,
  );

  const title = edit
    ? t('create-post:headline.editPost')
    : t('create-post:headline.makePost');

  if (!emailVerified) {
    return <EmailNotVerificatedWarning />;
  }

  if (!phoneVerified) {
    return <PhoneNotVerificatedWarning />;
  }

  return (
    <NestedLayout>
      <Container>
        <div css={styles.form}>
          <div css={styles.formWrapper}>
            <h3 css={styles.pageHeader}>{title}</h3>
            <div css={styles.sections}>
              {type === ProductType.AUCTION && <AuctionForm edit={edit} />}
              {type === ProductType.SELLING && <ProductForm edit={edit} />}
            </div>
          </div>
        </div>
      </Container>
    </NestedLayout>
  );
};

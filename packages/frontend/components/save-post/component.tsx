import { useTranslation } from 'next-i18next';
import { Container, Loader } from '@primitives';
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
  const { user, loading } = useTypedSelector((state) => state.auth);

  if (loading || !user) {
    return (
      <NestedLayout>
        <Container>
          <div css={styles.form}>
            <Loader size="big" />;
          </div>
        </Container>
      </NestedLayout>
    );
  }

  const { emailVerified, phoneVerified } = user;

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

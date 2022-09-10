import { Button, Container, Icon } from '@primitives';
import { IconColor, IconName, Routes } from '@enums';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as styles from './styles';

export const OrderSuccessPageInner = () => {
  const { t } = useTranslation('checkout');
  const router = useRouter();

  return (
    <Container css={styles.wrapper}>
      <div>
        <Icon
          cssExtend={styles.icon}
          icon={IconName.SUCCESS}
          color={IconColor.SUCCESS}
        />
      </div>
      <h2 css={styles.header}>{t('PAYMENT_SUCCESSFUL')}</h2>
      <Button onClick={() => router.push(Routes.ITEMS)}>
        {t('GO_TO_PRODUCTS')}
      </Button>
    </Container>
  );
};

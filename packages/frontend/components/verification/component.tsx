import { IconName, ItemRoutes, Routes } from '@enums';
import { Button, IconButton, Input, InternalLink, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import router from 'next/router';
import hand from 'public/images/mocup_hand1.png';
import { useEffect, useState } from 'react';
import * as styles from './styles';

export default function VerificationModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { t } = useTranslation();

  return (
    <Modal visible={isVisible}>
      <div css={styles.innerWrapper}>
        <h3 css={styles.headline}>{t('verify:headline')}</h3>
        <span>{t('verify:description')}</span>
        <IconButton
          cssExtend={styles.xmark}
          icon={IconName.XMARK}
          onClick={() => setIsVisible(false)}
        />
        <div css={styles.imgWrapper}>
          <Image width={285} height={285} src={hand.src} alt="MARK" />
        </div>
        <div css={styles.inputsWrappper}>
          <Input
            label={t('verify:phone')}
            variant="primary"
            type="text"
            name="phone"
          />
          <Button
            onClick={() =>
              router.push(`${Routes.ITEMS}${ItemRoutes.CREATE_DIRECT_SALE}`)
            }
          >
            {t('verify:button.verify')}
          </Button>
        </div>

        <InternalLink
          variant="dashboard"
          label={t('verify:link.later')}
          href={'#'}
        />
      </div>
    </Modal>
  );
}

import { IconName, ItemRoutes, Routes } from '@enums';
import { Button, IconButton, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import legoImg from 'public/images/postType/lego.png';
import { useTypedSelector } from '@hooks';
import type { PostTypeProps } from './types';
import * as styles from './styles';

export const PostTypeModal = ({ isOpen, setIsOpen }: PostTypeProps) => {
  const { t } = useTranslation();
  const isConfirmed = useTypedSelector(
    (state) => state.auth.user?.phoneVerified,
  );
  const router = useRouter();

  return (
    <Modal visible={isOpen}>
      <div css={styles.innerWrapper}>
        <h3 css={styles.headline}>
          {t('common:components.typeOfPost.headline')}
        </h3>
        <IconButton
          cssExtend={styles.xmark}
          icon={IconName.XMARK}
          onClick={() => setIsOpen(false)}
        />
        <div css={styles.imgWrapper}>
          <Image width={516} height={285} src={legoImg.src} alt="LEGO" />
        </div>
        <div css={styles.btnWrapper}>
          <Button
            onClick={() => router.push(`${Routes.ITEMS}${ItemRoutes.CREATE}`)}
            disabled={!isConfirmed}
          >
            {t('common:components.typeOfPost.btn.auction')}
          </Button>
          <span>{t('common:components.typeOfPost.btn.or')}</span>
          <Button
            onClick={() => router.push(`${Routes.ITEMS}${ItemRoutes.CREATE}`)}
            disabled={!isConfirmed}
          >
            {t('common:components.typeOfPost.btn.directSale')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

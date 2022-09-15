import { IconName, ItemRoutes, Routes } from '@enums';
import { Button, IconButton, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/future/image';
import legoImg from 'public/images/postType/lego.png';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { hideMakePostModal } from 'store/modals/actions';
import * as styles from './styles';

const PostTypeModal = () => {
  const { t } = useTranslation();
  const isConfirmed = useTypedSelector(
    (state) => state.auth.user?.phoneVerified,
  );
  const isOpen = useTypedSelector(
    (state) => state.modals.isCreatePostModalOpen,
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(hideMakePostModal());
  };

  return (
    <Modal visible={isOpen}>
      <div css={styles.innerWrapper}>
        <h3 css={styles.headline}>
          {t('common:components.typeOfPost.headline')}
        </h3>
        <IconButton
          cssExtend={styles.xmark}
          icon={IconName.XMARK}
          onClick={() => onClose()}
          ariaLabel={t('common:components.modal.closeLabel')}
        />
        <div css={styles.imgWrapper}>
          <Image width={516} height={285} src={legoImg.src} alt="LEGO" />
        </div>
        <div css={styles.btnWrapper}>
          <Button
            onClick={() => {
              router.push(`${Routes.ITEMS}${ItemRoutes.CREATE_AUCTION}`);
              onClose();
            }}
            disabled={!isConfirmed}
            tooltip={
              isConfirmed
                ? t('common:components.typeOfPost.btn.auction')
                : t('common:components.typeOfPost.btn.tooltip.auction')
            }
          >
            {t('common:components.typeOfPost.btn.auction')}
          </Button>
          <span>{t('common:components.typeOfPost.btn.or')}</span>
          <Button
            onClick={() => {
              router.push(`${Routes.ITEMS}${ItemRoutes.CREATE_DIRECT_SALE}`);
              onClose();
            }}
            disabled={!isConfirmed}
            tooltip={
              isConfirmed
                ? t('common:components.typeOfPost.btn.directSale')
                : t('common:components.typeOfPost.btn.tooltip.directSale')
            }
          >
            {t('common:components.typeOfPost.btn.directSale')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PostTypeModal;

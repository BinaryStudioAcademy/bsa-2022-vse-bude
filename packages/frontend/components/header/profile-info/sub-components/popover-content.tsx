import { ProfileRoutes, Routes, IconName, IconColor } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Icon } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { logoutUser } from 'store/auth';
import * as styles from '../styles';
import type { PopoverContentProps } from '../types';

export const PopoverContent = ({ handleClose }: PopoverContentProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const userId = useTypedSelector((state) => state.auth.user.id);
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    let path = '/';

    e.target.hasAttribute('path-label')
      ? (path = e.target.getAttribute('path-label'))
      : (path = e.target.parentElement.getAttribute('path-label'));

    router.push(path);
    handleClose();
  };

  return (
    <div css={styles.popoverContentWrapper}>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={`${Routes.PROFILE}/${userId}`}
        data-variant="icon"
      >
        <Icon icon={IconName.USER} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.personalInfo')}</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={`${Routes.PROFILE}${ProfileRoutes.LIST}`}
        data-variant="icon"
      >
        <Icon icon={IconName.LIST} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.myList')}</span>
      </button>
      {/* <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={`${Routes.PROFILE}${ProfileRoutes.ACCOUNT_SETTINGS}`}
        data-variant="icon"
      >
        <Icon icon={IconName.SETTINGS} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.settings')}</span>
      </button> */}
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={`${Routes.PROFILE}${ProfileRoutes.NOTIFICATIONS}`}
        data-variant="icon"
      >
        <Icon icon={IconName.BELL} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.notifications')}</span>
      </button>
      {/* <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={`${Routes.PROFILE}${ProfileRoutes.MESSAGES}`}
        data-variant="icon"
      >
        <Icon icon={IconName.MESSAGE} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.messages')}</span>
    </button> */}
      <button
        css={styles.popoverContentItem}
        onClick={() =>
          (location.href = 'mailto:vsebude.team@gmail.com?subject=Support')
        }
        path-label={`${Routes.PROFILE}${ProfileRoutes.SUPPORT}`}
        data-variant="icon"
      >
        <Icon icon={IconName.SUPPORT} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.support')}</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={() => {
          dispatch(logoutUser());
        }}
        data-variant="icon"
      >
        <Icon icon={IconName.SIGN_OUT} color={IconColor.YELLOW} />
        <span>{t('common:header.popover.signOut')}</span>
      </button>
    </div>
  );
};

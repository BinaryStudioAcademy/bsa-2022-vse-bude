import { AccountRoutes, Routes, IconName } from '@enums';
import { Icon } from '@primitives';
import { useRouter } from 'next/router';
import * as styles from '../styles';
import type { PopoverContentProps } from '../types';

export const PopoverContent = ({ onClose }: PopoverContentProps) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(e.target.getAttribute('path-label'));
    onClose();
  };

  return (
    <div css={styles.popoverContentWrapper}>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL}
        data-variant="icon"
      >
        <Icon icon={IconName.USER} color="yellow" />
        <span>Personal Info</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST}
        data-variant="icon"
      >
        <Icon icon={IconName.LIST} color="yellow" />
        <span>My List</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS}
        data-variant="icon"
      >
        <Icon icon={IconName.SETTINGS} color="yellow" />
        <span>Settings</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES}
        data-variant="icon"
      >
        <Icon icon={IconName.MESSAGE} color="yellow" />
        <span>Messages</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST}
        data-variant="icon"
      >
        <Icon icon={IconName.SUPPORT} color="yellow" />
        <span>Support</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.DEFAULT}
        data-variant="icon"
      >
        <Icon icon={IconName.SIGN_OUT} color="yellow" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

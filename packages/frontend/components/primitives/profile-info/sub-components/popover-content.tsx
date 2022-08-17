import { AccountRoutes, Routes, IconName } from '@enums';
import { Icon } from '@primitives';
import type { PopoverContentProps } from '../types';

export const PopoverContent = ({
  wrapperStyles,
  innerStyles,
  handleClick,
}: PopoverContentProps) => (
  <div css={wrapperStyles}>
    <button
      css={innerStyles}
      onClick={handleClick}
      path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL}
      data-variant="icon"
    >
      <Icon icon={IconName.USER} color="yellow" />
      Personal Info
    </button>
    <button
      css={innerStyles}
      onClick={handleClick}
      path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST}
      data-variant="icon"
    >
      <Icon icon={IconName.LIST} color="yellow" />
      My List
    </button>
    <button
      css={innerStyles}
      onClick={handleClick}
      path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS}
      data-variant="icon"
    >
      <Icon icon={IconName.SETTINGS} color="yellow" />
      Settings
    </button>
    <button
      css={innerStyles}
      onClick={handleClick}
      path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES}
      data-variant="icon"
    >
      <Icon icon={IconName.MESSAGE} color="yellow" />
      Messages
    </button>
    <button
      css={innerStyles}
      onClick={handleClick}
      path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST}
      data-variant="icon"
    >
      <Icon icon={IconName.SUPPORT} color="yellow" />
      Support
    </button>
    <button
      css={innerStyles}
      onClick={handleClick}
      path-label={Routes.DEFAULT}
      data-variant="icon"
    >
      <Icon icon={IconName.SIGN_OUT} color="yellow" />
      Sign Out
    </button>
  </div>
);

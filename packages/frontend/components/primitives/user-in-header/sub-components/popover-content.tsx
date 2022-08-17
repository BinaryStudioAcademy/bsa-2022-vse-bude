import type { PopoverContentInHeaderProps } from "../types";

export const PopoverContent = ({wrapperStyles, innerStyles, handleClick}: PopoverContentInHeaderProps) => {
    console.log('lol');

  return (
    <div css={wrapperStyles}>
        <button css={innerStyles} onClick={handleClick} link-label="PERSONAL_INFO">
            Personal Info
          </button>
          <button css={innerStyles} onClick={handleClick} link-label="MY_LIST">
            My List
          </button>
          <button css={innerStyles} onClick={handleClick} link-label="SETTINGS">
            Settings
          </button>
          <button css={innerStyles} onClick={handleClick} link-label="MESSAGES">
            Messages
          </button>
          <button css={innerStyles} onClick={handleClick} link-label="SUPPORT">
            Support
          </button>
          <button css={innerStyles} onClick={handleClick} link-label="SIGN_OUT">
            Sign Out
          </button>
    </div>
  );
};

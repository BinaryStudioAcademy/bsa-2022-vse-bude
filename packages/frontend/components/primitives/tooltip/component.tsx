import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from 'react';
import type { TooltipProps } from './types';
import * as styles from './styles';

export const Tooltip = ({
  children,
  body,
  place = 'top',
  delayHideMs = 0,
  offset = {},
}: TooltipProps) => {
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div data-tip css={styles.tooltipTrigger}>
        {children}
      </div>
      {isMounted && (
        <ReactTooltip
          css={styles.tooltip}
          place={place}
          offset={offset}
          delayHide={delayHideMs}
        >
          {body}
        </ReactTooltip>
      )}
    </div>
  );
};

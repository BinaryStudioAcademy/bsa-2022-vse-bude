import { useRef, useEffect, useState, useCallback } from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './styles';
import type { TooltipProps } from './types';

export const Tooltip = ({ trigger, children, hideTimeoutMs = 500 }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const bodyRef = useRef<HTMLDivElement>();
  const triggerWrapperRef = useRef<HTMLDivElement>();
  let timer: NodeJS.Timeout | null = null;

  const calcBodyCoords = useCallback(() => {
    const {
      left: triggerLeft,
      top: triggerTop,
      height: triggerHeight,
      width: triggerWidth,
    } = getTriggerRectParams();
    const { height: bodyHeight, width: bodyWidth } = getBodyRectParams();

    const newBodyLeft = triggerLeft + triggerWidth / 2 - bodyWidth / 2;

    let newBodyTop = window.scrollY + triggerTop;
    newBodyTop += triggerTop - bodyHeight <= 0 ? triggerHeight : -bodyHeight;

    return [newBodyTop, newBodyLeft];
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      const [bodyTop, bodyLeft] = calcBodyCoords();

      bodyRef.current.style.top = `${bodyTop}px`;
      bodyRef.current.style.left = `${bodyLeft}px`;
    }
  }, [isVisible, calcBodyCoords]);

  const getTriggerRectParams = () =>
    triggerWrapperRef.current.getBoundingClientRect();

  const getBodyRectParams = () => bodyRef.current.getBoundingClientRect();

  const handleMouseEnter = () => {
    setIsVisible(true);
    if (timer) {
      clearTimeout(timer);
    }
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsVisible(false);
    }, hideTimeoutMs);
  };

  const renderPortalBody = () => (
    <div
      ref={bodyRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      css={styles.body}
    >
      {children}
    </div>
  );

  const renderPortal = () =>
    ReactDOM.createPortal(
      renderPortalBody(),
      document.querySelector('#portal'),
    );

  return (
    <React.Fragment>
      <span
        ref={triggerWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        css={styles.trigger}
      >
        {trigger}
      </span>
      {isVisible && renderPortal()}
    </React.Fragment>
  );
};

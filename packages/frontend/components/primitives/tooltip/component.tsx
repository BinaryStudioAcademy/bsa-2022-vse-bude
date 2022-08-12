import { useRef, useEffect, useState, useCallback } from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './styles';
import type { TooltipProps } from './types';

export const Tooltip = ({
  trigger,
  children,
  hideTimeoutMs = 500,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const bodyRef = useRef<HTMLDivElement>();
  const triggerWrapperRef = useRef<HTMLDivElement>();
  const timerRef = useRef(null);

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyRectParams = getBodyRectParams();

    let bodyTop = window.scrollY + triggerRectParams.top;
    bodyTop +=
      triggerRectParams.top - bodyRectParams.height <= 0
        ? triggerRectParams.height
        : -bodyRectParams.height;

    const bodyLeft =
      triggerRectParams.left +
      triggerRectParams.width / 2 -
      bodyRectParams.width / 2;

    return [bodyTop, bodyLeft];
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
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
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

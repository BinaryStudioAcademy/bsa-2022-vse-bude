import { useMouseLeave } from '@hooks';
import { Fragment, useRef, useEffect, useState, useCallback } from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './styles';
import type { TooltipProps } from './types';

const marginScreenLeftRightPx = 10;

export const Tooltip = ({
  trigger,
  children,
  hideTimeoutMs = 300,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const bodyRef = useRef<HTMLDivElement>();
  const triggerWrapperRef = useRef<HTMLSpanElement>();
  const timerRef = useRef(null);

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyRectParams = getBodyRectParams();

    const bodyTop = getBodyTopCoords(triggerRectParams, bodyRectParams);

    const bodyLeft = getBodyLeftCoords(triggerRectParams, bodyRectParams);

    return [bodyTop, bodyLeft];
  }, []);

  const getBodyTopCoords = (triggerRectParams, bodyRectParams) => {
    let bodyTop = window.scrollY + triggerRectParams.top;

    // check overflow screen top and bottom sides
    if (triggerRectParams.top - bodyRectParams.height <= 0) {
      bodyTop += triggerRectParams.height;
    } else {
      bodyTop -= bodyRectParams.height;
    }

    return bodyTop;
  };

  const getBodyLeftCoords = (triggerRectParams, bodyRectParams) => {
    let bodyLeft =
      triggerRectParams.left +
      triggerRectParams.width / 2 -
      bodyRectParams.width / 2;

    const screenWidth = document.documentElement.clientWidth;

    // check overflow screen left and right sides
    if (bodyLeft <= 0) {
      bodyLeft = marginScreenLeftRightPx;
    } else if (bodyLeft + bodyRectParams.width >= screenWidth) {
      bodyLeft = screenWidth - bodyRectParams.width - marginScreenLeftRightPx;
    }

    return bodyLeft;
  };

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

  useMouseLeave(handleMouseLeave);

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
    <Fragment>
      <span
        ref={triggerWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        css={styles.trigger}
      >
        {trigger}
      </span>
      {isVisible && children && renderPortal()}
    </Fragment>
  );
};

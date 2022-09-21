import { Fragment, useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './styles';
import type { TooltipProps } from './types';

const marginScreenLeftRightPx = 10;
const tooltipOffset = 10;

export const Tooltip = ({
  trigger,
  children,
  refNode = 'current',
  hideTimeoutMs = 100,
  style,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const bodyRef = useRef<HTMLDivElement>();
  const arrowRef = useRef<HTMLDivElement>();
  const triggerWrapperRef = useRef<HTMLSpanElement>();
  const timerRef = useRef(null);

  const getTriggerRectParams = useCallback(() => {
    const element =
      refNode === 'current'
        ? triggerWrapperRef.current
        : triggerWrapperRef.current.parentElement;

    return element.getBoundingClientRect();
  }, [refNode]);

  const getBodyRectParams = () => bodyRef.current.getBoundingClientRect();

  const getBodyTopCoords = (
    triggerRectParams: DOMRect,
    bodyRectParams: DOMRect,
  ) => {
    let bodyTop = window.scrollY + triggerRectParams.top;

    // check overflow screen top and bottom sides
    if (triggerRectParams.top - bodyRectParams.height <= 0) {
      bodyTop += triggerRectParams.height;
    } else {
      bodyTop -= bodyRectParams.height;
    }

    return bodyTop;
  };

  const getBodyLeftCoords = (
    triggerRectParams: DOMRect,
    bodyRectParams: DOMRect,
  ) => {
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

  const getArrowLeftCoords = (triggerRectParams: DOMRect, bodyLeft: number) =>
    triggerRectParams.left + triggerRectParams.width / 2 - bodyLeft;

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyRectParams = getBodyRectParams();

    const bodyTop = getBodyTopCoords(triggerRectParams, bodyRectParams);
    const bodyLeft = getBodyLeftCoords(triggerRectParams, bodyRectParams);
    const arrowLeft = getArrowLeftCoords(triggerRectParams, bodyLeft);

    return [bodyTop, bodyLeft, arrowLeft];
  }, [getTriggerRectParams]);

  useEffect(() => {
    if (bodyRef.current) {
      const [bodyTop, bodyLeft, arrowLeft] = calcBodyCoords();

      bodyRef.current.style.top = `${bodyTop - tooltipOffset}px`;
      bodyRef.current.style.left = `${bodyLeft}px`;

      arrowRef.current.style.left = `${arrowLeft}px`;
    }
  }, [isVisible, calcBodyCoords]);

  const setTooltipPosition = useCallback(() => {
    if (bodyRef.current) {
      const [bodyTop, bodyLeft, arrowLeft] = calcBodyCoords();

      bodyRef.current.style.top = `${bodyTop - tooltipOffset}px`;
      bodyRef.current.style.left = `${bodyLeft}px`;

      arrowRef.current.style.left = `${arrowLeft}px`;
    }
  }, [calcBodyCoords]);

  const handleWindowSizeChange = useCallback(() => {
    setTooltipPosition();
  }, [setTooltipPosition]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  const handleMouseEnter = () => {
    setIsVisible(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setFadeOut(false);
      }, hideTimeoutMs);
    }, hideTimeoutMs);
  };

  const renderPortalBody = () => (
    <div
      ref={bodyRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      css={[styles.body, fadeOut && styles.fadeOut]}
    >
      {children}
      <div ref={arrowRef} css={styles.arrow} />
    </div>
  );

  const renderPortal = () =>
    createPortal(renderPortalBody(), document.querySelector('#tooltip'));

  return (
    <Fragment>
      <span
        style={style}
        ref={triggerWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </span>
      {isVisible && children && renderPortal()}
    </Fragment>
  );
};

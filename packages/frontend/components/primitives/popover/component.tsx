import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { resetButton } from 'theme';
import { useOutsideClick } from '@hooks';
import type { PopoverProps } from './types';
import * as styles from './styles';

export const Popover = ({
  trigger,
  children,
  placement = 'bottom-right',
  bodyWrapperCssExtend,
  triggerWrapperCssExtend,
}: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerWrapperRef = useRef<HTMLButtonElement>();
  const handleClickOutside = useCallback(() => {
    event.stopPropagation();
    setIsVisible(false);
  }, []);
  const bodyRef = useOutsideClick(handleClickOutside);

  const getBodyRectParams = useCallback(
    () => bodyRef.current.getBoundingClientRect(),
    [bodyRef],
  );

  const getTriggerRectParams = () =>
    triggerWrapperRef.current.getBoundingClientRect();

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyRectParams = getBodyRectParams();

    const bodyTop = triggerRectParams.top + triggerRectParams.height;
    let bodyRight = triggerRectParams.left;
    bodyRight +=
      placement === 'bottom-right'
        ? triggerRectParams.width - bodyRectParams.width
        : 0;

    return [bodyTop, bodyRight];
  }, [getBodyRectParams, placement]);

  const setPopoverPosition = useCallback(() => {
    if (bodyRef.current) {
      const [bodyTop, bodyRight] = calcBodyCoords();
      bodyRef.current.style.top = `${bodyTop}px`;
      bodyRef.current.style.left = `${bodyRight}px`;
    }
  }, [bodyRef, calcBodyCoords]);

  const handleWindowSizeChange = useCallback(() => {
    setPopoverPosition();
  }, [setPopoverPosition]);

  useEffect(() => {
    setPopoverPosition();
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [
    isVisible,
    bodyRef,
    calcBodyCoords,
    handleWindowSizeChange,
    setPopoverPosition,
  ]);

  const handleMouseClick = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = useCallback(() => setIsVisible(false), []);

  const renderPortalBody = () => (
    <div ref={bodyRef} css={[styles.popover, bodyWrapperCssExtend]}>
      {children(handleClose)}
    </div>
  );

  const renderPortal = () =>
    ReactDOM.createPortal(
      renderPortalBody(),
      document.querySelector('#popover'),
    );

  return (
    <React.Fragment>
      <button
        onClick={handleMouseClick}
        css={[resetButton, triggerWrapperCssExtend]}
        ref={triggerWrapperRef}
      >
        {typeof trigger === 'function'
          ? trigger({ isOpen: isVisible })
          : trigger}
      </button>
      {isVisible && renderPortal()}
    </React.Fragment>
  );
};

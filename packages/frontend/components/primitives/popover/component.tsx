import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { resetButton } from 'theme';
import { useOutsideClick } from '@hooks';
import * as styles from './styles';
import type { PopoverProps } from './types';

export const Popover = ({ trigger, children }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerWrapperRef = useRef<HTMLButtonElement>();
  const handleClickOutside = useCallback(() => setIsVisible(false), []);
  const bodyRef = useOutsideClick(handleClickOutside);

  const getBodyRectParams = useCallback(
    () => bodyRef.current.getBoundingClientRect(),
    [bodyRef],
  );

  const getTriggerRectParams = () =>
    triggerWrapperRef.current.parentElement.getBoundingClientRect();

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyRectParams = getBodyRectParams();

    const bodyTop = triggerRectParams.bottom;
    const bodyRight =
      triggerRectParams.left + triggerRectParams.width - bodyRectParams.width;

    return [bodyTop, bodyRight];
  }, [getBodyRectParams]);

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
    <div ref={bodyRef} css={styles.popover}>
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
        css={resetButton}
        ref={triggerWrapperRef}
      >
        {trigger}
      </button>
      {isVisible && renderPortal()}
    </React.Fragment>
  );
};

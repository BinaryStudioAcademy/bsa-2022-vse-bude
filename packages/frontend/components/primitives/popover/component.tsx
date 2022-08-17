import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { resetButton } from 'theme';
import { useOutsideClick } from '@hooks';
import * as styles from './styles';
import type { PopoverProps } from './types';

export const Popover = ({ trigger, children }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const bodyRef = useRef<HTMLDivElement>();

  const handleClickOutside = useCallback(() => setIsVisible(false), []);
  const triggerWrapperRef = useOutsideClick(handleClickOutside);

  const getTriggerRectParams = useCallback(
    () => triggerWrapperRef.current.getBoundingClientRect(),
    [triggerWrapperRef],
  );

  const getBodyRectParams = () => bodyRef.current.getBoundingClientRect();

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyRectParams = getBodyRectParams();

    const bodyTop = triggerRectParams.bottom;
    const bodyRight =
      triggerRectParams.left + triggerRectParams.width - bodyRectParams.width;

    return [bodyTop, bodyRight];
  }, [getTriggerRectParams]);

  useEffect(() => {
    if (bodyRef.current) {
      const [bodyTop, bodyRight] = calcBodyCoords();
      bodyRef.current.style.top = `${bodyTop}px`;
      bodyRef.current.style.left = `${bodyRight}px`;
    }
  }, [isVisible, calcBodyCoords]);

  const handleMouseClick = () => {
    setIsVisible(true);
  };

  const renderPortalBody = () => (
    <div ref={bodyRef} css={styles.popover}>
      {children}
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

import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { resetButton } from 'theme';
import { useOutsideClick } from 'hooks/popover';
import * as styles from './styles';
import type { PopoverProps } from './types';

const Popover = ({ trigger, children }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const bodyRef = useRef<HTMLDivElement>();
  const triggerWrapperRef = useRef<HTMLButtonElement>();

  const calcBodyCoords = useCallback(() => {
    const triggerRectParams = getTriggerRectParams();
    const bodyTop = triggerRectParams.bottom;
    const bodyLeft = triggerRectParams.right;

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

  const handleMouseClick = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  useOutsideClick(triggerWrapperRef, onClose, isVisible);
  
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

export default Popover;

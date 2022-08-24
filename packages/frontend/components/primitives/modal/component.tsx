import React from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as styles from './styles';
import type { ModalProps } from './types';

export const Modal = ({ children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => setIsVisible(false), []);

  const renderPortalBody = () => (
    <div css={styles.modalWrapper}>
      <div css={styles.modalContent}>{children(handleClose)}</div>
    </div>
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderPortal = () =>
    ReactDOM.createPortal(renderPortalBody(), document.querySelector('#modal'));

  return <React.Fragment>{isVisible && renderPortal()}</React.Fragment>;
};

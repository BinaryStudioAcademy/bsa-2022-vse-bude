import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as styles from './styles';
import type { ModalProps } from './types';

export const Modal = ({ visible, children }: ModalProps) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
  }, [visible]);

  const renderPortalBody = () => (
    <div css={styles.modalWrapper}>
      <div css={styles.modalContent}>{children}</div>
    </div>
  );

  const renderPortal = () =>
    ReactDOM.createPortal(renderPortalBody(), document.querySelector('#modal'));

  return <React.Fragment>{visible && renderPortal()}</React.Fragment>;
};

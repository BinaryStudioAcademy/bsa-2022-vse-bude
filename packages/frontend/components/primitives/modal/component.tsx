import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './styles';
import type { ModalProps } from './types';

export const Modal = ({ visible, children }: ModalProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [visible]);

  const renderPortalBody = () => (
    <div css={styles.modalWrapper}>
      <div css={styles.modalContent}>{children}</div>
    </div>
  );

  const renderPortal = () =>
    createPortal(renderPortalBody(), document.querySelector('#modal'));

  return <React.Fragment>{visible && renderPortal()}</React.Fragment>;
};

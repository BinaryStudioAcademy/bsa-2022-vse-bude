import { Modal } from '@primitives';
import React, { useEffect, useState } from 'react';
import type { ConsentProps } from './types';
import { ConsentContent } from './sub-components/consent-content';

export const ConsentPage = ({ children }: ConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return(
    <React.Fragment>
      {
        <Modal visible={isVisible}>
          <ConsentContent setVisible={setIsVisible}> {children}</ConsentContent>
        </Modal>
      }
    </React.Fragment>
  );
};

import { Modal } from '@primitives';
import React, { useEffect, useState } from 'react';
import { ConsentContent } from './sub-components/consent-content';

export const ConsentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <React.Fragment>
        <Modal visible={isVisible}>
          <ConsentContent setVisible={setIsVisible}> Our terms of service</ConsentContent>
        </Modal>
    </React.Fragment>
  );
};

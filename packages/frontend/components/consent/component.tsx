import { Modal } from '@primitives';
import React from 'react';
import type { ConsentProps } from './types';
import { ConsentContent } from './sub-components/consent-content';

export const ConsentPage = ({ children }: ConsentProps) => (
        <React.Fragment>
            {<Modal>
                {(handleClose) => <ConsentContent handleClose={handleClose}> {children}</ConsentContent>}
            </Modal>}
        </React.Fragment>
    );

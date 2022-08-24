import { Button, Checkbox } from '@primitives';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as styles from '../styles';
import type { ConsentContentProps } from '../types';

export const ConsentContent = ({
  handleClose,
  children,
}: ConsentContentProps) => {
  const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const setAgree = () => {
    setValue(!value);
    setDisabled(!disabled);
  };

  return (
    <React.Fragment>
      {children}
      <div css={styles.consentCheckbox}>
        <Checkbox label="I agree" value={value} onChange={setAgree}></Checkbox>
      </div>
      <div css={styles.consentButtons}>
        <Button
          variant="outlined"
          disabled={disabled}
          onClick={() => handleClose()}
        >
          Agree
        </Button>
        <Button onClick={() => router.push('/')}>Decline</Button>
      </div>
    </React.Fragment>
  );
};

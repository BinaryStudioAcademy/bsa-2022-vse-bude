import React from 'react';
import type { InputFileProps } from './types';
import * as styles from './style';

const Upload = ({ id, multiple = false }: InputFileProps, ref) => (
  <input
    ref={ref}
    css={styles.download}
    id={id}
    type="file"
    accept=".jpg, .png"
    multiple={multiple}
  />
);

export const InputFile = React.forwardRef(Upload);

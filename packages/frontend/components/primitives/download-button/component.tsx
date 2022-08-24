import React from 'react';
import { Icon } from '@primitives';
import { IconName } from '@enums';
import type { DownloadButtonProps } from './types';
import * as styles from './styles';

const InputFile = (
  { id, multiple = false }: DownloadButtonProps,
  ref,
) => (
  <div css={styles.container}>
    <label css={styles.downloadWrapper} htmlFor={id}>
      <input
        ref={ref}
        css={styles.download}
        id={id}
        type="file"
        accept=".jpg, .png, .jpeg"
        multiple={multiple}
      />
      <Icon
        color="gray"
        cssExtend={styles.downloadIcon}
        icon={IconName.CAMERA}
      />
    </label>
  </div>
);

export const DownloadButton = React.forwardRef(InputFile);

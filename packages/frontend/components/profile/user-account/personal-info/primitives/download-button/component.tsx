import React from 'react';
import { Icon } from '@primitives';
import { IconColor, IconName } from '@enums';
import { InputFile } from '../input-file';
import type { DownloadButtonProps } from './types';
import * as styles from './styles';

const AvatarButton = ({ id }: DownloadButtonProps, ref) => (
  <div css={styles.container}>
    <label css={styles.downloadWrapper} htmlFor={id}>
      <InputFile id={id} ref={ref} />
      <Icon
        color={IconColor.GRAY}
        cssExtend={styles.downloadIcon}
        icon={IconName.CAMERA}
      />
    </label>
  </div>
);

export const DownloadButton = React.forwardRef(AvatarButton);

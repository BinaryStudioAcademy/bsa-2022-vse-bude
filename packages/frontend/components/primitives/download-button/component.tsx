import type { FC } from 'react';
import { Icon } from '@primitives';
import { IconName } from '@enums';
import type { DownloadButtonProps } from './types';
import * as styles from './styles';

export const DownloadButton: FC<DownloadButtonProps> = ({
  id,
  name,
  multiple = false,
  onChange,
}) => (
  <div css={styles.container}>
    <label css={styles.downloadWrapper} htmlFor={id}>
      <input
        css={styles.download}
        id={id}
        type="file"
        name={name}
        multiple={multiple}
        onChange={onChange}
      />
      <Icon
        color="gray"
        cssExtend={styles.downloadIcon}
        icon={IconName.CAMERA}
      />
    </label>
  </div>
);

import { IconColor, IconName } from '@enums';
import React from 'react';
import { IconButton } from '../icon-button';
import * as styles from './styles';
import type { SearchProps } from './types';

const SearchInputInner = ({ value, onChange, ...props }: SearchProps, ref) => (
  <div css={styles.searchWrapper}>
    {value && (
      <IconButton
        color={IconColor.BLACK}
        icon={IconName.XMARK}
        size={'sm'}
        cssExtend={styles.showBtn}
        onClick={(e) => onChange('', e)}
        ariaLabel=""
      />
    )}
    <input
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value, e)}
      css={styles.searchInput}
      type={'text'}
      {...props}
    />
  </div>
);

export const SearchInput = React.forwardRef(SearchInputInner);

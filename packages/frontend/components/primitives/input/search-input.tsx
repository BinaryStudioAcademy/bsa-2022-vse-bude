import React from 'react';
import * as styles from './styles';
import type { SearchProps } from './types';

const SearchInputInner = (
  { value, setValue, onChange, ...props }: SearchProps,
  ref,
) => (
  <div css={styles.searchWrapper}>
    {value && (
      <button css={styles.showBtn} onClick={() => setValue('')} type="button">
        X
      </button>
    )}
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      css={styles.searchInput}
      type={'text'}
      {...props}
    />
  </div>
);
export const SearchInput = React.forwardRef(SearchInputInner);

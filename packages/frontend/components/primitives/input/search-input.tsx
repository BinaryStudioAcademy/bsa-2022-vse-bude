import { useAppDispatch } from '@hooks';
import React from 'react';
import { clearSearch } from 'store/product';
import * as styles from './styles';
import type { SearchProps } from './types';

const SearchInputInner = (
  { value, setValue, onChange, ...props }: SearchProps,
  ref,
) => {
  const dispatch = useAppDispatch();

  const clearInput = () => {
    setValue('');
    dispatch(clearSearch());
  };

  return(
  <div css={styles.searchWrapper}>
    {value && (
      <button css={styles.showBtn} onClick={clearInput} type="button">
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
};
export const SearchInput = React.forwardRef(SearchInputInner);

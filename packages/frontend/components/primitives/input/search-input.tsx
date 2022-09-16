import { IconColor, IconName } from '@enums';
import { useAppDispatch } from '@hooks';
import React from 'react';
import { clearSearch } from 'store/product';
import { IconButton } from '../icon-button';
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

  return (
    <div css={styles.searchWrapper}>
      {value && (
        <IconButton
          color={IconColor.BLACK}
          icon={IconName.XMARK}
          size={'sm'}
          cssExtend={styles.showBtn}
          onClick={clearInput}
          ariaLabel=""
        ></IconButton>
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

import { Routes } from '@enums';
import { useAppDispatch, useOutsideClick, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { actionSearch, clearSearch } from 'store/product';
import { SearchInput } from '../input';
import * as styles from './styles';
import type { SearchProps } from './types';

const Search = ({ value, setValue, setSearchOpen, ...props }: SearchProps) => {
  const dispatch = useAppDispatch();
  const { searchedProducts } = useTypedSelector((state) => state.product);
  const { push } = useRouter();

  const handleClickOutside = useCallback(() => {
    setSearchOpen(false);
    dispatch(clearSearch());
  }, [setSearchOpen, dispatch]);
  const ref = useOutsideClick(handleClickOutside);

  const debounce =
    (cb, delay = 100) =>
    (...args) => {
      setTimeout(() => {
        cb(...args);
      }, delay);
    };

  const handleSearch = debounce((value) => {
    dispatch(actionSearch(value));
  });

  const callback = async ({ target }) => {
    setValue(target.value);
    handleSearch(target.value);
  };

  const redirectToItem = async (productId: string) => {
    const filters = {
      productId,
    };
    push({
      pathname: `${Routes.ITEMS}/${productId}`,
      query: { filter: JSON.stringify(filters) },
    });
    dispatch(clearSearch());
  };

  return (
    <div ref={ref} css={styles.searchWrapper}>
      <SearchInput
        value={value}
        setValue={setValue}
        onChange={callback}
        placeholder={props.placeholder}
      ></SearchInput>
      <div css={styles.searchContent}>
        {searchedProducts.length > 0 &&
          searchedProducts.map((product, key) => (
            <button
              css={styles.searchItem}
              onClick={() => redirectToItem(product.id)}
              key={key}
            >
              {product.title}
            </button>
          ))}
      </div>
    </div>
  );
};
export { Search };

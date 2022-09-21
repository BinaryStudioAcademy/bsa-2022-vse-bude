import { Routes } from '@enums';
import debounce from 'lodash/debounce';
import { useAppDispatch, useOutsideClick, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { actionSearch, clearSearch } from 'store/product';
import { useTranslation } from 'next-i18next';
import { SearchInput } from '../../primitives/input';
import * as styles from './styles';
import type { SearchProps } from './types';

const Search = ({ setSearchOpen }: SearchProps) => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { searchedProducts } = useTypedSelector((state) => state.product);
  const { push } = useRouter();

  const handleClickOutside = useCallback(() => {
    setSearchOpen(false);
    dispatch(clearSearch());
  }, [setSearchOpen, dispatch]);

  const ref = useOutsideClick(handleClickOutside);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value: string) => {
      if (value) {
        dispatch(actionSearch(value));
      }
    }, 300),
    [dispatch],
  );

  const handleChange = (newValue: string) => {
    setValue(newValue);
    handleSearch(newValue);
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
        onChange={handleChange}
        placeholder={t('common:components.input.searchProductsPlaceholder')}
      />
      {!!searchedProducts.length && (
        <div css={styles.searchContent}>
          {searchedProducts.map((product, key) => (
            <button
              css={styles.searchItem}
              onClick={() => redirectToItem(product.id)}
              key={key}
            >
              {product.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

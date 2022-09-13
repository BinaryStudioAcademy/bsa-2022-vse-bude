import { Routes } from '@enums';
import { useAppDispatch, useOutsideClick, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { actionSearch, clearSearch } from 'store/product';
import { SearchInput } from '../input';
import { Dropdown } from '../menu-dropdown';
import * as styles from './styles';
import type { SearchProps } from './types';

const Search = ({ value, setValue, ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { searchedProducts } = useTypedSelector((state) => state.product);
  const { push } = useRouter();

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

  useEffect(() => {
    if (searchedProducts.length) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchedProducts]);

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
    <Dropdown
      options={searchedProducts.map((item) => ({
        value: item.title,
        key: item.id,
        cssExtend: styles.option,
        onClick: () => {
          redirectToItem(item.id);
        },
      }))}
      onChildrenClick={() => setIsOpen(!isOpen)}
      cssExtend={styles.wrapper}
    >
      <SearchInput
        value={value}
        setValue={setValue}
        onChange={callback}
        placeholder={props.placeholder}
      ></SearchInput>
    </Dropdown>
  );
};
export { Search };

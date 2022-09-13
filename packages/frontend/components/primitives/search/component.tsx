import { Routes } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { actionSearch } from 'store/product';
import { SearchInput } from '../input';
import { Dropdown } from '../menu-dropdown';
import * as styles from './styles';
import type { SearchProps } from './types';

const Search = ({ value, setValue, ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { searchedProducts } = useTypedSelector(state => state.product);
  const { push } = useRouter();
  
  const callback = async({ target }) => {  
    setValue(target.value);
    await dispatch(actionSearch(target.value.toString()));
  };
 
  useEffect(() => {
    if(searchedProducts.length){
      setIsOpen(true);
    }
    else{
      setIsOpen(false);
    }
  }, [searchedProducts]); 

  const redirectToItem = async (productId: string) => {
    await dispatch(actionSearch(''));
    const filters = {
      productId,
    };
    push({
      pathname: `${Routes.ITEMS}/${productId}`,
      query: { filter: JSON.stringify(filters) },
    });
  };

  return(
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
      
      <SearchInput value={value} setValue={setValue} onChange={callback} placeholder={props.placeholder}></SearchInput>
    </Dropdown>
  
    );
};
export { Search };

import { SearchWrapper, StyledSearchInput } from './styles';
import type { ISearchInput } from './types';

const SearchInput = ({
  id,
  name,
  autocomplete = 'off',
  placeholder,
  value,
  ...props
}: ISearchInput) => (
  <SearchWrapper>
    <StyledSearchInput
      type={'text'}
      id={id}
      name={name}
      placeholder={placeholder || ''}
      autoComplete={autocomplete}
      value={value}
      {...props}
    />
  </SearchWrapper>
);
export default SearchInput;

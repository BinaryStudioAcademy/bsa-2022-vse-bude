import * as styles from './styles';
import type { SearchProps } from './types';

export const SearchInput = ({ value, setValue, ...props }: SearchProps) => (
  <div css={styles.SearchWrapper}>
    {value && <button css={styles.ShowBtn} onClick={() => setValue('')} type='button'>X</button>}
    <input value={value} onChange={({ target }) => setValue(target.value)} css={styles.StyledSearchInput}
      type={'text'}
      {...props}
    />
  </div>
);


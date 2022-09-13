export interface SearchProps extends React.HTMLProps<HTMLButtonElement> {
  value: string;
  setValue: (string) => void;
  setSearchOpen: (boolean) => void;
}

import { error } from './styles';

export type ErrorProps = {
  text: string;
};

// TODO: implement displaying errors globaly using redux, remove that component if needed

export const Error = ({ text }: ErrorProps) => <p css={error}>{text}</p>;

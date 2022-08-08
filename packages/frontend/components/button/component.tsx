import { StyledButton } from './styles';

export const Button = ( props ) => (
  <StyledButton data-variant={props.data_variant} data-size={props.data_size}>
    {props.text}
  </StyledButton>
);

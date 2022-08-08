import { Container } from '@primitives';
import { StyledButton } from './styles';

export const Button = ( props ) => (
  <StyledButton data-variant={props.data_variant} data-size={props.data_size}>
    <Container>{props.text}</Container>
  </StyledButton>
);

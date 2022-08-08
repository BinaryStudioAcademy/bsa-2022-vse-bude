import { Container } from '@primitives';
import { StyledButton } from './styles';

export const Button = (props) => (
  <StyledButton form-variant={props.variant}>
    <Container>{props.text}</Container>
  </StyledButton>
);

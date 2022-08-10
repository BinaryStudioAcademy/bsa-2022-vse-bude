import {
  ErrorMessage,
  InputWrapper,
  StyledFooterInput,
  StyledFooterLabel,
} from './styles';
import type { IInput } from './types';

const FooterInput = ({
  error,
  id,
  name,
  autocomplete = 'off',
  placeholder,
  label,
  type,
  value,
  ...props
}: IInput) => (
  <InputWrapper>
    {label && <StyledFooterLabel htmlFor={id}>{label}</StyledFooterLabel>}
    <StyledFooterInput
      status={error ? 'error' : 'succeeded'}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder || ''}
      autoComplete={autocomplete}
      value={value}
      {...props}
    />
    {error && (
      <ErrorMessage>
        {/* TODO: remove placeholder */}
        <span>!!!!</span>
        {error}
      </ErrorMessage>
    )}
  </InputWrapper>
);
export default FooterInput;

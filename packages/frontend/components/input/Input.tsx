import { ErrorMessage, InputWrapper, StyledInput, StyledLabel } from './styles';
import type { IInput } from './types';

const Input = ({
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
    {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    <StyledInput
      stylesType={'text'}
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
export default Input;

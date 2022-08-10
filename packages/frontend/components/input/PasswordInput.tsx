import { useState } from 'react';
import {
  ButtonWrapper,
  ErrorMessage,
  InputWrapper,
  ShowBtn,
  StyledInput,
  StyledLabel,
} from './styles';
import type { IPasswordInput } from './types';

const PasswordInput = ({
  error,
  id,
  name,
  autocomplete = 'off',
  placeholder,
  label,
  value,
  ...props
}: IPasswordInput) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <ButtonWrapper>
        <ShowBtn type="button" onClick={() => setIsShown(!isShown)}>
          {/* TODO: remove placeholder */}
          {isShown ? 'H' : 'S'}
        </ShowBtn>
        <StyledInput
          stylesType={'password'}
          status={error ? 'error' : 'succeeded'}
          type={isShown ? 'text' : 'password'}
          id={id}
          name={name}
          placeholder={placeholder || ''}
          autoComplete={autocomplete}
          value={value}
          {...props}
        />
      </ButtonWrapper>
      {error && (
        <ErrorMessage>
          {/* TODO: remove placeholder */}
          <span>!!!!</span>
          {error}
        </ErrorMessage>
      )}
    </InputWrapper>
  );
};
export default PasswordInput;

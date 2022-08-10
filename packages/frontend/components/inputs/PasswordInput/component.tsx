import { useState } from 'react';
import {
  ButtonWrapper,
  ErrorMessage,
  InputWrapper,
  ShowBtn,
  StyledInput,
  StyledLabel,
} from './styles';

type IPasswordInput = {
  id: string;
  name: string;
  autocomplete?: string;
  placeholder?: string;
  label?: string;
  error?: string;
};

const PasswordInput: React.FC<IPasswordInput> = ({
  error,
  id,
  name,
  autocomplete = 'off',
  placeholder,
  label,
}: {
  id: string;
  name: string;
  autocomplete?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <ButtonWrapper>
        <ShowBtn type="button" onClick={() => setIsShown(!isShown)}>
          {isShown ? 'H' : 'S'}
        </ShowBtn>
        <StyledInput
          status={error ? 'error' : 'succeeded'}
          type={isShown ? 'text' : 'password'}
          id={id}
          name={name}
          placeholder={placeholder || ''}
          autoComplete={autocomplete}
        />
      </ButtonWrapper>
      {error && (
        <ErrorMessage>
          <span>!!!!</span>
          {error}
        </ErrorMessage>
      )}
    </InputWrapper>
  );
};
export default PasswordInput;

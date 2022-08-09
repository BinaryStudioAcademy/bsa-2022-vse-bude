import { StyledButton } from './styles';
import * as React from 'react';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'empty';
  size:  'big' | 'small';
}

export const Button = ({variant, size, ...props} : IButton) => (
  <StyledButton
    data-variant={variant}
    data-size={size}
    onClick={props.onClick}
  >
      {props.title}
  </StyledButton>
  
);

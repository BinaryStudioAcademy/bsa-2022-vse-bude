import { styled } from '@nextui-org/react';

export const StyledInput = styled('input', {
  transition: '200ms linear',
  width: '100%',
  border: '$backgroundLight 2px solid',
  borderRadius: '$md',
  boxSizing: 'border-box',
  padding: '12px $md',
  backgroundColor: '$backgroundLight',
  fontSize: '$toggle',
  lineHeight: '$toggle',
  fontFamily: '$sans',
  '&::placeholder': {
    opacity: 0.2,
    color: '$text',
  },
  '&:focus': {
    borderColor: '$backgroundDark',
    caretColor: '$primary',
  },
  variants: {
    status: {
      error: {
        color: '$error',
      },
      succeeded: {
        color: '$text',
      },
    },
  },
});

export const StyledLabel = styled('label', {
  marginBottom: '4px',
  cursor: 'pointer',
  fontSize: '$caption',
  lineHeight: '$caption',
  fontFamily: '$sans',
  color: '$text',
});

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '325px',
});

export const ErrorMessage = styled('p', {
  transition: '200ms linear',
  margin: '2px 0 0',
  cursor: 'pointer',
  fontSize: '$caption',
  lineHeight: '$caption',
  fontFamily: '$sans',
  color: '$error',
  '& span': {
    marginRight: '$xs',
  },
});

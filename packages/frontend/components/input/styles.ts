import { styled } from '@nextui-org/react';

export const StyledInput = styled('input', {
  transition: '200ms linear',
  width: '100%',
  border: '$backgroundLight 2px solid',
  borderRadius: '$md',
  boxSizing: 'border-box',
  backgroundColor: '$backgroundLight',
  fontSize: '$toggle',
  lineHeight: '$toggle',
  fontFamily: '$sans',
  '&::placeholder': {
    opacity: 0.2,
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
    stylesType: {
      password: {
        padding: '12px 50px 12px $md',
      },
      text: {
        padding: '12px $md',
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

export const ButtonWrapper = styled('div', {
  position: 'relative',
});

export const ShowBtn = styled('button', {
  position: 'absolute',
  top: '50%',
  right: '15px',
  transform: 'translateY(-50%)',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

export const StyledSearchInput = styled('input', {
  transition: '200ms linear',
  boxShadow: '2px 5px 10px 0px #C3C3C340',
  width: '100%',
  border: '$backgroundDark 1px solid',
  borderRadius: '$lg',
  boxSizing: 'border-box',
  padding: '22px 34px',
  backgroundColor: '$background',
  fontSize: '$toggle',
  lineHeight: '$toggle',
  fontFamily: '$sans',
  color: '$text',
  '&::placeholder': {
    opacity: 0.3,
    color: '$text',
  },
});

export const SearchWrapper = styled('div', {
  boxShadow: '-1px -2px 23px 0px #C3C3C340',
  borderRadius: '$lg',
});

export const StyledFooterInput = styled('input', {
  transition: '200ms linear',
  width: '100%',
  border: '$secondaryLight 2px solid',
  borderRadius: '$md',
  boxSizing: 'border-box',
  padding: '12px $md',
  backgroundColor: '$secondaryLight',
  fontSize: '$toggle',
  lineHeight: '$toggle',
  fontFamily: '$sans',
  '&::placeholder': {
    opacity: 0.4,
    color: '$background',
  },
  '&:focus': {
    borderColor: '$secondaryDark',
    caretColor: '$background',
  },
  variants: {
    status: {
      error: {
        color: '$error',
      },
      succeeded: {
        color: '$background',
      },
    },
  },
});

export const StyledFooterLabel = styled('label', {
  marginBottom: '4px',
  cursor: 'pointer',
  fontSize: '$caption',
  lineHeight: '$caption',
  fontFamily: '$sans',
  color: '$background',
});

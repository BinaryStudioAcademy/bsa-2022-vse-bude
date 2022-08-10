import { styled } from '@nextui-org/react';

export const StyledInput = styled('input', {
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

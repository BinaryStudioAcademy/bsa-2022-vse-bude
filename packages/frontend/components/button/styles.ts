import { styled } from '@nextui-org/react';

export const StyledButton = styled('button', {
  borderStyle: 'none',
  fontSize: '$base',
  lineHeight: '20px',
  fontFamily: '$sans',
  fontWeight: '$bold',

  '&[data-variant="filled"]': {
    background: '#DFDFDF',
    color: '$white',
    '&:hover': {
      background: '#FFB800',
    },
    '&:active': {
      background: '#F1B313',
    },
  },

  '&[data-variant="empty"]': {
    border: '1px solid #DFDFDF',
    background: '$white',
    color: '#DFDFDF',
    '&:hover': {
      border: '1px solid #F1B313',
      color: '#F1B313',
    },
    '&:active': {
      border: '1px solid #2C4340',
      color: '#2C4340',
    },
  },

  '&[data-size="big"]': {
    borderRadius: '10px',
    padding: '13px 35px',
  },

  '&[data-size="small"]': {
    borderRadius: '7px',
    padding: '8px 20px',
  },
});

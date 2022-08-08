import { styled } from '@nextui-org/react';

export const StyledButton = styled('button', {
  padding: '13px 35px',
  fontWeight: '$bold',
  fontSize: '$base',
  lineHeight: '19px',
  borderStyle: 'none',
  borderRadius: '10px',
  fontFamily: '$sans',

  'div': {
    padding: '0',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  '&[form-variant="ordinary"]': {
    background: '#DFDFDF',
    color: '$white',
    '&:hover': {
      background: '#FFB800',
    },
    '&:active': {
      background: '#F1B313',
    }
  },

  '&[form-variant="empty"]': {
    background: '$white',
    color: '#DFDFDF',
    border: '1px solid #DFDFDF',
    '&:hover': {
      color: '#F1B313',
      border: '1px solid #F1B313',
    },
    '&:active': {
      color: '#2C4340',
      border: '1px solid #2C4340',
    }
  },

  '&[form-variant="small"]': {
    padding: '8px 20px',
    background: '#DFDFDF',
    color: '$white',
    borderRadius: '7px',
    '&:hover': {
      background: '#FFB800',
    },
    '&:active': {
      background: '#F1B313',
    }
  }
});

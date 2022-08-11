import React from 'react';
import type { PriceProps } from './types';
import { price } from './styles';

export const Price = (props: PriceProps) => (
  <React.Fragment>
    <span css={price}>
      <span>{props.amount} </span>
      <span>{props.currency}</span>
    </span>
  </React.Fragment>
);

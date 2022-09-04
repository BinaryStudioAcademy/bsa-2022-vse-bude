import { css } from '@emotion/react';

export const verifyText = css`
  background: lightgray;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
  > span:first-of-type {
    display: block;
    margin-bottom: 10px;
  }
`;

export const verifyInput = css`
  letter-spacing: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const verifyForm = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  > span {
    width: 100%;
  }
`;

export const verifyEntity = css`
  font-weight: bold;
`;

import { css } from '@emotion/react';
import type { Theme } from 'theme';
import phoneIcon from '../../../public/images/footer/phone-icon.svg';
import emailIcon from '../../../public/images/footer/email-icon.svg';
import policy from '../../../public/images/footer/privacy-policy-icon.svg';

export const footerLinksWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-right: ${spaces.xl4};
`;

export const footerLinksRow = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spaces.md};
`;

export const phone = () => css`
  display: block;
  margin-right: 12px;
  width: 18px;
  height: 18px;
  background: url(${phoneIcon.src}) no-repeat;
`;

export const email = () => css`
  display: block;
  margin-right: 12px;
  width: 18px;
  height: 13px;
  background: url(${emailIcon.src}) no-repeat;
`;

export const shield = () => css`
  display: block;
  margin-right: 12px;
  width: 16px;
  height: 17px;
  background: url(${policy.src}) no-repeat;
`;

export const primaryUnderline = ({ colors }: Theme) => css`
  border-bottom: 1px solid ${colors.accent};
`;

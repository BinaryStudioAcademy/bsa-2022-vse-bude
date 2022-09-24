import type { Interpolation, Theme } from '@emotion/react';
import type { ImageProps } from 'next/future/image';
import type { IconProps } from '../icon/types';

export type DropdownProps = {
  children: string | React.ReactNode;
  options: DropdownOptionProps[];
  cssExtend?: Interpolation<Theme>;
  onChildrenClick?: () => void;
};

export type DropdownOptionProps = {
  value: string;
  onClick: () => void;
  key?: string | number;
  icon?: IconProps;
  disabled?: boolean;
  cssExtend?: Interpolation<Theme>;
  image?: DropdownImage;
};

interface DropdownImage extends ImageProps {
  css: Interpolation<Theme>;
}

import type React from 'react';

export interface AccountPageProps {
  children: React.ReactNode;
}

export interface LinkData {
  iconPath: string;
  width: number;
  height: number;
  label: string;
  path: string;
}

export interface LinkProps extends LinkData {
  location: boolean;
}

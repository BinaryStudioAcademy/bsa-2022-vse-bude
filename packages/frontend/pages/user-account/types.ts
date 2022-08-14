import type React from 'react';

export interface AccountPageProps {
  children: React.ReactNode;
}

export interface LinksData {
  iconPath: string;
  width: number;
  height: number;
  label: string;
  path: string;
}

import type { ReactNode } from 'react';

export interface SectionLayoutProps {
  title: string;
  loadMoreTitle?: string;
  children: ReactNode;
}

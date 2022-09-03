import type { ReactNode } from 'react';

export interface SectionLayoutProps {
  title: string;
  loadMoreTitle?: string;
  loadMoreHref?: string;
  children: ReactNode;
}

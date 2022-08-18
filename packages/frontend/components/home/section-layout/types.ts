import type { ReactNode } from 'react';

export interface SectionLayotProps {
  title: string;
  loadMoreTitle: string;
  children: ReactNode;
  withOutTitle?: boolean;
  loadMoreAction: any;
}

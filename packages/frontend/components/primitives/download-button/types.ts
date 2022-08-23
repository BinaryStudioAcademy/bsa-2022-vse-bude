import type React from 'react';

export interface DownloadButtonProps {
  id: string;
  multiple?: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

import type { TFunction } from 'next-i18next';
import type { ToastLevel } from './level';

export interface CreateToast {
  level: ToastLevel;
  description: string | ((t: TFunction) => string);
}

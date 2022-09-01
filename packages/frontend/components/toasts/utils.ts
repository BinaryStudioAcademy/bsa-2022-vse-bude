import { IconColor, IconName } from '@enums';
import type { ToastLevel } from '@types';

export const iconsProps: Record<
  ToastLevel,
  { icon: IconName; color: IconColor }
> = {
  info: { icon: IconName.INFO, color: IconColor.INFO },
  warning: { icon: IconName.INFO, color: IconColor.YELLOW },
  error: { icon: IconName.INFO, color: IconColor.ERROR },
  success: { icon: IconName.CHECK, color: IconColor.SUCCESS },
};

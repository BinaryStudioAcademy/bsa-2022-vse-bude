import { lang } from '@lang';
import type { Condition } from '@prisma/client';

export const translateCondition = (condition: Condition) =>
  ({
    NEW: lang('product:condition.NEW'),
    USED: lang('product:condition.USED'),
  }[condition]);

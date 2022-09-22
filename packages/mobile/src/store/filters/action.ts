import { createAction } from '@reduxjs/toolkit';
import { ProductQuery } from '@vse-bude/shared';
import { ActionType } from './common';

const update = createAction<Partial<ProductQuery>>(ActionType.UPDATE);

const reset = createAction(ActionType.RESET);

export { reset, update };

import { Routes } from '@enums';
import type { ProductQuery } from '@vse-bude/shared';

export const getFilterFromQuery = (query, push): ProductQuery => {
  try {
    const filter: ProductQuery =
      query.filter && JSON.parse(query.filter as string);

    return filter;
  } catch (_) {
    push({
      pathname: Routes.ITEMS,
    });
  }
};

export const deepEquals = (firstObj, secondObj): boolean => {
  const stringifyFirstObj = JSON.stringify(firstObj);
  const stringifySecondObj = JSON.stringify(secondObj);

  return stringifyFirstObj === stringifySecondObj;
};

export const removeFilterFields = (
  filter: ProductQuery,
  fieldsToRemove: string[],
) => {
  const newFilter = { ...filter };
  fieldsToRemove.forEach((field) => delete newFilter[field]);

  return newFilter;
};

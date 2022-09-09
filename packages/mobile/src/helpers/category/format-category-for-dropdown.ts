import { CategoryDto } from '@vse-bude/shared';

const categoryForDropdown = (
  array: CategoryDto[],
): Array<{
  label: string;
  value: string;
}> => {
  const categories = array.map((item) => {
    return {
      'label': item.title,
      'value': item.id,
    };
  });

  return categories;
};

export { categoryForDropdown };

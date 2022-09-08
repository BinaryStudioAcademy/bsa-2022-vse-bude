import { CategoryDto } from '@vse-bude/shared';

const categoryForDropdown = (array: CategoryDto[]) => {
  const categories = array.map((item) => {
    return {
      'label': item.title,
      'value': item.id,
    };
  });

  return categories;
};

export { categoryForDropdown };

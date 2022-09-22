import { CategoryResponseDto } from '@vse-bude/shared';

const categoryForDropdown = (
  array: CategoryResponseDto[] | null,
): Array<{
  label: string;
  value: string;
}> | null => {
  if (!array?.length) {
    return null;
  }

  return array?.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });
};

export { categoryForDropdown };

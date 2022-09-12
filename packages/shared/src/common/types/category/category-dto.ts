type CategoryDto = {
  id: string;
  title: string;
  image: string;
};

type CategoryResponseDto = {
  id: string;
  title: string;
  createdAt: string;
  image: string | null;
  updatedAt: string;
  productsCount: number | null;
};

export type { CategoryDto, CategoryResponseDto };

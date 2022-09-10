type CategoryDto = {
  id: string;
  title: string;
  image: string;
};

type CategoryResponseDto = {
  id: string;
  title: string;
  createdAt: Date;
  image: string | null;
  updatedAt: Date;
  productsCount: number | null;
};

export type { CategoryDto, CategoryResponseDto };

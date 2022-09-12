import type { ProductDto } from './product-dto';

export interface ProductCreateDto extends ProductDto {
  categoryId: string;
  authorId: string;
}
export interface CreateProduct {
  req: Request;
  userId: string;
  fieldsData: ProductCreateDto;
}

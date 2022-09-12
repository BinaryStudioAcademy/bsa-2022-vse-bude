import type { ProductDto } from './product-dto';

export interface ProductUpdateDto extends ProductDto {
  categoryId: string;
  images: string[];
  postDate: string;
}
export interface UpdateProduct {
  req: Request;
  productId: string;
  userId: string;
  fieldsData: ProductUpdateDto;
}

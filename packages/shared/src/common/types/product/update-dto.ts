import type { ProductStatus } from './product-status-dto';
import type { ProductDto } from './product-dto';

export interface ProductUpdateDto extends Omit<ProductDto, 'status'> {
  categoryId: string;
  status: ProductStatus;
  images: string[];
}
export interface UpdateProduct {
  req: Request;
  productId: string;
  userId: string;
  fieldsData: ProductUpdateDto;
}

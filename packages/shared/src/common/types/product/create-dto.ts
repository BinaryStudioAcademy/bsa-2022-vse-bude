import type { ProductDto } from './product-dto';
import type { ProductStatus } from './product-status-dto';

export interface ProductCreateDto extends Omit<ProductDto, 'status'> {
  categoryId: string;
  status: ProductStatus;
  authorId: string;
}
export interface CreateProduct {
  req: Request;
  userId: string;
  fieldsData: ProductCreateDto;
}

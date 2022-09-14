import type { ProductDto } from './product-dto';

export interface AllProductsDto {
  items: ProductDto[];
  count: number;
}

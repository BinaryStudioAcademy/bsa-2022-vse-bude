import { ProductStatus } from './product-status-dto';
import { ProductType } from './product-type';

export interface MyListItem {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice: number;
  minimalBid: number;
  country: string;
  city: string;
  phone: string;
  type: ProductType;
  status: ProductStatus;
  imageLinks: string[];
  views: number;
  authorId: string;
  winnerId: string;
  categoryId: string;
  postDate: Date;
  updatedAt: Date;
}

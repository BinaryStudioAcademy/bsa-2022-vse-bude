import type { ProductType, ProductStatuses } from '../../enums';
import type { SocialMedia } from '../social-media';
import type { AuthorDto } from './author-dto';
import type { WinnerDto } from './winner-dto';
import type { CategoryDto } from './category-dto';

type ProductDto = {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice: number;
  minimalBid: number;
  imageLinks: string[];
  country: string;
  city: string;
  phone: string;
  socialMedia: SocialMedia[];
  type: ProductType;
  status: ProductStatuses;
  condition: string;
  category: CategoryDto;
  views: number;
  author: AuthorDto;
  winner: WinnerDto;
  updatedAt: Date;
  postDate: Date;
  endDate: Date;
};

export type { ProductDto };

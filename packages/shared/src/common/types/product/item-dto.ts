import type { CategoryDto } from './category-dto';
import type { BidDto } from './bid-dto';
import type { AuthorDto } from './author-dto';
import type { ProductDto } from './product-dto';

export type ItemDto = ProductDto & {
  cancelReason: string;
  category: CategoryDto;
  winnerId: string | null;
  createdAt: Date;
  updatedAt: Date;
  bids: BidDto[];
  author: AuthorDto;
};

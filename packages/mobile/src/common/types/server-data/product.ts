import { LotType } from '~/common/enums/enums';

type ProductProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  recomendedPrice: number;
  minimalBid: number;
  imageLinks: string[];
  city: string;
  type: LotType;
  status: string;
  endDate: string;
  cancellReason: string;
  authorId: string;
  categoryId: string;
  winnerId: number | boolean;
  createdAt: string;
  updatedAt: string;
};

export type { ProductProps };

export interface ProductCardProps {
  loadImageHighPriority?: boolean;
  images: string[];
  auctionDate: Date;
  name: string;
  description: string;
  price: number;
  currency: string;
  isFavorite?: boolean;
  data: {
    id: string;
  };
}

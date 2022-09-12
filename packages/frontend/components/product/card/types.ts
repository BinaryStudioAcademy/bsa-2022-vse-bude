export interface ProductCardProps {
  loadImageHighPriority?: boolean;
  images: string[];
  auctionDate: string;
  name: string;
  description: string;
  type: string;
  price: number;
  currency: string;
  isFavorite?: boolean;
  data: {
    id: string;
  };
}

export interface ProductCardProps {
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
  onButtonClick: (productId: string) => void;
}

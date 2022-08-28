export interface ProductCardProps {
  images: string[];
  auctionDate: Date;
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  isFavorite?: boolean;
  onChangeIsFavorite: () => void;
  onButtonClick: (productId: string) => void;
}

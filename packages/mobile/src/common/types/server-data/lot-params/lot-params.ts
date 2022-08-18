import { ImageURISource } from 'react-native';

type LotParams = Array<{
  id: number;
  title: string;
  description: string;
  price: string;
  imageLinks: ImageURISource;
}>;

export type { LotParams };

import { ImageURISource } from 'react-native';

type LotData = Array<{
  price: string;
  imgSrc: ImageURISource;
  description: string;
  title: string;
  id: number;
}>;

export type { LotData };

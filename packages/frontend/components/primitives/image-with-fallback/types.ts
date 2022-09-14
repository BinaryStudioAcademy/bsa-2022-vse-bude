import type { ImageProps, StaticImageData } from 'next/image';

export interface ImageWithFallbackProps extends ImageProps {
  width?: string | number;
  height?: string | number;
  fill?: boolean;
  alt: string;
  src: string | StaticImageData;
  fallbackSrc: string | StaticImageData;
}

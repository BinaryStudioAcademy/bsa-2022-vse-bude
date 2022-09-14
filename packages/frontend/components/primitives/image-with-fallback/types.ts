import type { ImageProps, StaticImageData } from 'next/image';

export interface ImageWithFallbackProps extends ImageProps {
  alt: string;
  src: string | StaticImageData;
  fallbackSrc: string | StaticImageData;
}

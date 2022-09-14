import type { ImageProps, StaticImageData } from 'next/image';

export interface ImageWithFallbackProps extends ImageProps {
  src: string | StaticImageData;
  fallbackSrc: string | StaticImageData;
}

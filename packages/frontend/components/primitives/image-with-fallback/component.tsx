import { useEffect, useState } from 'react';
import Image from 'next/future/image';
import type { ImageWithFallbackProps } from './types';

export const ImageWithFallback = ({
  width,
  height,
  fill,
  alt,
  src,
  fallbackSrc,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      fill={fill}
      width={width}
      height={height}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

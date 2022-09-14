import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { ImageWithFallbackProps } from './types';

export const ImageWithFallback = ({
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
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

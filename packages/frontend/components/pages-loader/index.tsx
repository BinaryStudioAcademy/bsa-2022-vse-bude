import { ColorPalette } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';

const PageLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      document.body.style.pointerEvents = 'none';
    };
    const handleComplete = () => {
      document.body.style.pointerEvents = 'auto';
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return <NextNProgress height={4} color={ColorPalette.YELLOW_200} />;
};

export default PageLoader;

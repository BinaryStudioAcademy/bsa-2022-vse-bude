import { ColorPalette } from '@vse-bude/shared';
import NextNProgress from 'nextjs-progressbar';

const PageLoader = () => (
  <NextNProgress height={4} color={ColorPalette.YELLOW_200} />
);

export default PageLoader;

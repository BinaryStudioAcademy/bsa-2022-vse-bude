import { Container } from '@primitives';
import Link from 'next/link';
import type { SectionLayoutProps } from './types';
import { wrapper, title as titleStyled, loadMore } from './styles';

const SectionLayout = ({
  title,
  loadMoreTitle,
  children,
}: SectionLayoutProps) => (
  <section css={wrapper}>
    <Container>
      <div css={titleStyled}>
        <h2>{title}</h2>
        {loadMoreTitle && (
          <Link href="#" passHref>
            <a css={loadMore}>{loadMoreTitle}</a>
          </Link>
        )}
      </div>
      {children}
    </Container>
  </section>
);

export { SectionLayout };

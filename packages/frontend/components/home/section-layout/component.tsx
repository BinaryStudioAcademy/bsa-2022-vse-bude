import { Container, InternalLink } from '@primitives';
import type { SectionLayoutProps } from './types';
import { wrapper, title as titleStyled } from './styles';

const SectionLayout = ({
  title,
  loadMoreTitle,
  loadMoreHref,
  children,
}: SectionLayoutProps) => (
  <section css={wrapper}>
    <Container>
      <div css={titleStyled}>
        <h2>{title}</h2>
        {loadMoreTitle && (
          <InternalLink href={loadMoreHref}>{loadMoreTitle}</InternalLink>
        )}
      </div>
      {children}
    </Container>
  </section>
);

export { SectionLayout };

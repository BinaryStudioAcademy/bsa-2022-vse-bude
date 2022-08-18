import { Container } from '@primitives';
import type { SectionLayotProps } from './types';
import { wrapper, title as titleStyled } from './styles';

const SectionLayout = ({ title, children }: SectionLayotProps) => (
  <section css={wrapper}>
    <Container>
      <h2 css={titleStyled}>{title}</h2>
      {children}
    </Container>
  </section>
);

export { SectionLayout };

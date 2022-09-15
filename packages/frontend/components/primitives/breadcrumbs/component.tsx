import { Container, InternalLink } from '@primitives';
import type { Interpolation, Theme } from '@emotion/react';
import { wrapper } from './styles';

interface PagePathProps {
  paths: {
    name: string;
    route: string;
  }[];
  containerCssExtend?: Interpolation<Theme>;
  cssExtend?: Interpolation<Theme>;
}

export const Breadcrumbs = ({
  paths,
  cssExtend,
  containerCssExtend,
}: PagePathProps) => (
  <Container cssExtend={containerCssExtend}>
    <div css={[wrapper, cssExtend]}>
      {paths.map((path, index) => {
        if (path.name) {
          return (
            <InternalLink
              key={path.name + index}
              label={path.name}
              variant={index === paths.length - 1 ? 'primary' : 'default'}
              href={path.route}
            />
          );
        }
      })}
    </div>
  </Container>
);

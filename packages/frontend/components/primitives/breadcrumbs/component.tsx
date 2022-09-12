import { Container, InternalLink } from '@primitives';
import { wrapper } from './styles';

interface PagePathProps {
  paths: {
    name: string;
    route: string;
  }[];
}

export const Breadcrumbs = ({ paths }: PagePathProps) => (
  <Container>
    <div css={wrapper}>
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

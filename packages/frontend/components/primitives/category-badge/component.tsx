import { IconColor, IconName } from '@enums';
import { Container, IconButton } from '@primitives';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import * as styles from './styles';

interface CategoryBadgesProps {
  badges: {
    name: string;
  }[];
  onClick?: () => void;
}

export const CategoryBadges = ({ badges, onClick }: CategoryBadgesProps) => (
  <Container>
    <Splide
      options={{
        autoWidth: true,
        pagination: false,
        arrows: false,
        wheel: true,
        releaseWheel: true,
        mediaQuery: 'max',
        breakpoints: {},
      }}
    >
      {badges.map((badge) => (
        <SplideSlide key={badge.name}>
          <div css={styles.badge} key={badge.name}>
            {badge.name}
            <IconButton
              icon={IconName.XMARK}
              size="xs"
              onClick={onClick}
              color={IconColor.GRAY}
              ariaLabel={badge.name + '_xmark'}
              cssExtend={styles.cross}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </Container>
);

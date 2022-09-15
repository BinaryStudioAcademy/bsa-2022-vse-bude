import { IconColor, IconName } from '@enums';
import { IconButton } from '@primitives';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

interface CategoryBadgesProps {
  badges: {
    name: string;
    type?: string;
    onClick: () => void;
  }[];
}

export const CategoryBadges = ({ badges }: CategoryBadgesProps) => {
  const { t } = useTranslation();

  return (
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
          <div css={styles.badge}>
            <span>{badge.name}</span>
            <IconButton
              icon={IconName.XMARK}
              size="xs"
              onClick={badge.onClick}
              color={IconColor.GRAY}
              ariaLabel={t(`common:components.badge.removeLabel`, {
                param: badge.name,
              })}
              cssExtend={styles.cross}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

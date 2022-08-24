import { Splide } from '@splidejs/react-splide';
import { useTypedSelector } from '@hooks';
import { StringCutter } from '@primitives';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { SectionLayout } from '../section-layout';
import {
  categoryContainer,
  categoryItem,
  categoryItemTitle,
  SplideSlideStyled,
  imageWrapper,
} from './styles';

const mockImage = [
  '/images/categories/arts.png',
  '/images/categories/toys.png',
  '/images/categories/appliances.png',
  '/images/categories/decor.png',
];

const CategorySection = () => {
  const categories = useTypedSelector((state) => state.category.list);
  const { t } = useTranslation();
  const categoriesMapped = categories.map((item, i) => ({
    ...item,
    image: mockImage[i] || '/images/categories/decor.png',
  }));

  return (
    <SectionLayout
      title={t('home:popularCategories.title')}
      loadMoreTitle={t('home:popularCategories.link')}
    >
      <div css={categoryContainer}>
        <Splide
          options={{
            mediaQuery: 'min',
            pagination: false,
            arrows: false,
            autoWidth: true,
            gap: 20,
            breakpoints: {
              1200: {
                destroy: true,
              },
            },
          }}
        >
          {categoriesMapped.map((item) => (
            <SplideSlideStyled key={item.id}>
              <Link href="#" passHref>
                <a css={categoryItem}>
                  <div css={categoryItemTitle}>
                    <StringCutter>
                      {t(`common:categories.${item.title}` as any)}
                    </StringCutter>
                  </div>
                  <div css={imageWrapper}>
                    <Image
                      src={item.image}
                      alt={t(`common:categories.${item.title}` as any)}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </a>
              </Link>
            </SplideSlideStyled>
          ))}
        </Splide>
      </div>
    </SectionLayout>
  );
};

export { CategorySection };

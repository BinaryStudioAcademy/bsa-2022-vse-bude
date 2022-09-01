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

const categoryImageById = {
  '51dea135-fca2-4cc0-ab5b-a32c909f14e7': '/images/categories/appliances.png',
  '50d4f365-e241-4783-8b2c-809a7d83771b': '/images/categories/appliances.png',
  '3f9bd5c0-f9a8-4763-b020-eac58681b1cf': '/images/categories/toys.png',
  '0e86f866-2146-4a5a-970b-7a62f07144a6': '/images/categories/decor.png',
  'beff46f0-133b-4af7-8206-83419b526734': '/images/categories/arts.png',
};

const DEFAULT_IMAGE = '/images/categories/decor.png';

const CategorySection = () => {
  const categories = useTypedSelector((state) => state.category.list);
  const { t } = useTranslation();
  const limit = 4;

  console.log(categories);

  const categoriesLimit = categories?.slice(0, limit) || [];

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
          {categoriesLimit.map((item) => (
            <SplideSlideStyled key={item.id}>
              <Link href="#" passHref>
                <a css={categoryItem}>
                  <div css={categoryItemTitle}>
                    <StringCutter>{item.title}</StringCutter>
                  </div>
                  <div css={imageWrapper}>
                    <Image
                      src={categoryImageById[item.id] || DEFAULT_IMAGE}
                      alt={item.title}
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

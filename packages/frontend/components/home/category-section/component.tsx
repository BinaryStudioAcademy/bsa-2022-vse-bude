import { Splide } from '@splidejs/react-splide';
import { useTypedSelector } from '@hooks';
import { StringCutter } from '@primitives';
import Image from 'next/future/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Routes } from '@enums';
import { SectionLayout } from '../section-layout';
import {
  categoryContainer,
  categoryItem,
  categoryItemTitle,
  SplideSlideStyled,
  imageWrapper,
} from './styles';
import { categoryImageById, DEFAULT_IMAGE } from './utlis';

const CategorySection = () => {
  const categories = useTypedSelector((state) => state.category.list);
  const { t } = useTranslation();
  const limit = 4;

  const categoriesLimit = categories?.slice(0, limit) || [];

  const redirectToCategory = (category: string) => {
    const filters = {
      categoryId: category,
    };

    return encodeURI(`${Routes.ITEMS}?filter=${JSON.stringify(filters)}`);
  };

  return (
    <SectionLayout
      title={t('home:popularCategories.title')}
      // loadMoreTitle={t('home:popularCategories.link')}
    >
      <div css={categoryContainer}>
        <Splide
          options={{
            mediaQuery: 'min',
            pagination: false,
            arrows: false,
            autoWidth: true,
            lazyLoad: false,
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
              <Link
                prefetch={false}
                href={redirectToCategory(item.id)}
                passHref
              >
                <a css={categoryItem}>
                  <div css={categoryItemTitle}>
                    <StringCutter>{item.title}</StringCutter>
                  </div>
                  <div css={imageWrapper}>
                    <Image
                      src={categoryImageById[item.id] || DEFAULT_IMAGE}
                      alt={item.title}
                      fill
                      priority
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

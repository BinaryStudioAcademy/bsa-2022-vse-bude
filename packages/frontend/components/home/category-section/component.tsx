import { Splide } from '@splidejs/react-splide';
import { useTypedSelector } from '@hooks';
import { StringCutter } from '@primitives';
import Image from 'next/image';
import Link from 'next/link';
import { lightTheme } from 'theme';
import { fetchCategories } from 'store/category';
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

  const categoriesMapped = categories.map((item, i) => ({
    ...item,
    image: mockImage[i] || '/images/categories/decor.png',
  }));

  return (
    <SectionLayout
      withOutTitle
      title="Popular Categories"
      loadMoreAction={fetchCategories}
      loadMoreTitle="See All Categories"
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
              [lightTheme.breakpoints.xl]: {
                destroy: true,
              },
            },
          }}
        >
          {categoriesMapped.map((item, i) => (
            <SplideSlideStyled
              key={item.id}
              data-is-left={i + 1 === 1 || (i + 1) % 4 === 1}
              data-is-right={!((i + 1) % 4)}
            >
              <Link href="#" passHref>
                <a css={categoryItem}>
                  <div css={categoryItemTitle}>
                    <StringCutter>{item.title}</StringCutter>
                  </div>
                  <div css={imageWrapper}>
                    <Image
                      src={item.image}
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

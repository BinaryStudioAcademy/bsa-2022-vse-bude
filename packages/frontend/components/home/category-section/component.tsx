import { useTypedSelector } from '@hooks';
import { StringCutter } from '@primitives';
import Image from 'next/image';
import Link from 'next/link';
import { SectionLayout } from '../section-layout';
import { categoryContainer, categoryItem, categoryItemTitle } from './styles';

const CategorySection = () => {
  const categories = useTypedSelector((state) => state.category.list);

  return (
    <SectionLayout title="Popular Categories">
      <div css={categoryContainer}>
        {categories.map((item, i) => (
          <Link href="#" passHref key={item.id}>
            <a
              css={categoryItem}
              data-is-left={i + 1 === 1 || i + (1 % 4) === 1}
              data-is-right={!((i + 1) % 4)}
            >
              <div css={categoryItemTitle}>
                <StringCutter>{item.title}</StringCutter>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export { CategorySection };

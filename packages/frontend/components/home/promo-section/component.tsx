import { SearchInput } from 'components/primitives/input';
import { Container } from '@primitives';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import {
  wrapper,
  promoMain,
  title,
  subTitle,
  greeting,
  search,
  mobileTitle,
} from './styles';
import type { PromoProps } from './types';

const PromoSection = ({ searchQuery, setSearchQuery }: PromoProps) => {
  const { t } = useTranslation();

  return (
    <section css={wrapper}>
      <div css={promoMain}>
        <Container>
          <h1 css={title}>{t('home:hero.title')}</h1>
          <h1 css={mobileTitle}>
            <span>{t('home:hero.mobileTitle')}</span>
            <Image
              src="/images/icons/flag-ukraine.svg"
              alt="ukraine flag"
              width={36}
              height={36}
            />
          </h1>
          <div css={subTitle}>{t('home:hero.subtitle')}</div>
          <div css={search}>
            <SearchInput
              value={searchQuery}
              setValue={setSearchQuery}
              placeholder={t(
                'common:components.input.searchProductsPlaceholder',
              )}
            />
          </div>
        </Container>
      </div>
      <div css={greeting}>{t('home:hero.slogan')}</div>
    </section>
  );
};
export { PromoSection };

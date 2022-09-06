import { SearchInput } from 'components/primitives/input';
import { Container } from '@primitives';
import { useTranslation } from 'next-i18next';
import {
  wrapper,
  promoMain,
  title,
  subTitle,
  greeting,
  search,
  mobileTitle,
  flag,
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
            <div style={{ height: 26, width: 34 }} css={flag} />
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

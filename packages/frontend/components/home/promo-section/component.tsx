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

const PromoSection = () => {
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
          <div css={search}></div>
        </Container>
      </div>
      <div css={greeting}>{t('home:hero.slogan')}</div>
    </section>
  );
};
export { PromoSection };

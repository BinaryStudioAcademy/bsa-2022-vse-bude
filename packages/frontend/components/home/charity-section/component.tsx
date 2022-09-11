import { useTranslation } from 'next-i18next';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useTheme } from '@emotion/react';
import Image from 'next/future/image';
import { Container } from '@primitives';
import { wrapper, title, sliderWrapper } from './styles';

const CharitySection = () => {
  const { t } = useTranslation();
  const { breakpoints } = useTheme();

  return (
    <section css={wrapper}>
      <Container>
        <h2 css={title}>{t('home:charityOrganizations.title')}</h2>
        <div css={sliderWrapper}>
          <Splide
            options={{
              perPage: 4,
              perMove: 4,
              trimSpace: true,
              updateOnMove: true,
              wheel: true,
              releaseWheel: true,
              mediaQuery: 'max',
              breakpoints: {
                [breakpoints.sm]: {
                  perPage: 1,
                  perMove: 1,
                },
                [breakpoints.md]: {
                  perPage: 2,
                  perMove: 2,
                  arrows: false,
                },
                [breakpoints.lg]: {
                  perPage: 3,
                  perMove: 3,
                },
              },
            }}
          >
            <SplideSlide>
              <Image
                src="/images/charity/hope.svg"
                width={199}
                height={56}
                alt="hope fund"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/images/charity/international.svg"
                width={172}
                height={52}
                alt="international fund"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/images/charity/prytula.svg"
                width={220}
                height={68}
                alt="prytula fund"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/images/charity/live.svg"
                width={123}
                height={75}
                alt="live fund"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/images/charity/humanitarian.png"
                width={216}
                height={59}
                alt="humanitarian fund"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/images/charity/medicine.svg"
                width={52}
                height={70}
                alt="medicine fund"
              />
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </section>
  );
};

export { CharitySection };

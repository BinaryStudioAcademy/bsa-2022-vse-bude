import { useTranslation } from 'next-i18next';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from '@primitives';
import { lightTheme } from 'theme';
import { wrapper, title, sliderWrapper } from './styles';

import '@splidejs/react-splide/css';

const CharitySection = () => {
  const { t } = useTranslation();

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
              mediaQuery: 'max',
              breakpoints: {
                [lightTheme.breakpoints.md]: {
                  perPage: 2,
                  perMove: 2,
                },
                [lightTheme.breakpoints.lg]: {
                  perPage: 3,
                  perMove: 3,
                },
              },
            }}
          >
            <SplideSlide>
              <img src="images/charity/hope.svg" alt="logo" />
            </SplideSlide>
            <SplideSlide>
              <img src="images/charity/international.svg" alt="logo" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/charity/prytula.svg" alt="logo" />
            </SplideSlide>
            <SplideSlide>
              <img src="images/charity/live.svg" alt="logo" />
            </SplideSlide>
            <SplideSlide>
              <img src="images/charity/humanitarian.png" alt="logo" />
            </SplideSlide>
            <SplideSlide>
              <img src="images/charity/medicine.svg" alt="logo" />
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </section>
  );
};

export { CharitySection };

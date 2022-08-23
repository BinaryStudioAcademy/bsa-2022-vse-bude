import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from '@primitives';
import { lightTheme } from 'theme';
import { wrapper, title, sliderWrapper } from './styles';

import '@splidejs/react-splide/css';

const CharitySection = () => (
  <section css={wrapper}>
    <Container>
      <h2 css={title}>Charity Organizations</h2>
      <div css={sliderWrapper}>
        <Splide
          options={{
            autoWidth: true,
            gap: 80,
            mediaQuery: 'min',
            pagination: false,
            arrows: false,
            breakpoints: {
              [lightTheme.breakpoints.md]: {
                pagination: true,
                arrows: true,
              },
            },
          }}
        >
          <SplideSlide>
            <Image
              src="/images/charity/prytula.svg"
              width={219}
              height={67}
              alt="logo"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/charity/live.svg"
              width={140}
              height={82}
              alt="logo"
            />
          </SplideSlide>
          <SplideSlide>
            <img src="images/charity/hope.svg" alt="logo" />
          </SplideSlide>
          <SplideSlide>
            <img src="images/charity/international.svg" alt="logo" />
          </SplideSlide>
          <SplideSlide>
            <img src="images/charity/humanitarian.png" alt="logo" />
          </SplideSlide>
          <SplideSlide>
            <img src="images/charity/medicine.svg" alt="logo" />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/charity/prytula.svg"
              width={219}
              height={67}
              alt="logo"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/charity/live.svg"
              width={140}
              height={82}
              alt="logo"
            />
          </SplideSlide>
        </Splide>
      </div>
    </Container>
  </section>
);

export { CharitySection };

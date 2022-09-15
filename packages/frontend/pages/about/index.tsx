import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { withPublic } from '@hocs';
import { wrapper } from 'store';
import type { NextPageWithLayout } from 'pages/_app';
import { AboutUsLayout } from '@components/about';
import { AboutUsInfo } from '@components/about/about-info/component';

export const getStaticProps = withPublic(
  wrapper.getServerSideProps(() => async (ctx) => {
    const { locale } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['about', 'common'])),
      },
    };
  }),
);

const AboutUs: NextPageWithLayout = () => <AboutUsInfo />;

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return <AboutUsLayout>{page}</AboutUsLayout>;
};

export default AboutUs;

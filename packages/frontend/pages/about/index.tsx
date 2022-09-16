import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { withPublic } from '@hocs';
import { wrapper } from 'store';
import type { NextPageWithLayout } from 'pages/_app';
import { AboutUsLayout } from '@components/about';
import { AboutUsInfo } from '@components/about/about-info/component';

interface Contributor {
  name: string;
  photo: string;
  role: string;
}

interface ContributorsProps {
  contributors: Contributor[];
}

export const getStaticProps = wrapper.getStaticProps(() => async (ctx) => {
    const { locale } = ctx;

    const team = JSON.stringify(
      await import(`../../public/locales/${locale}/team.json`),
    );
    const contributors = JSON.parse(team).default;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['about', 'common'])),
        contributors,
      },
    };
  });

const AboutUs: NextPageWithLayout = ({ contributors }: ContributorsProps) => (
  <AboutUsInfo contributors={contributors} />
);

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return <AboutUsLayout>{page}</AboutUsLayout>;
};

export default AboutUs;

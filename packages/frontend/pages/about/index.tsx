import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPageWithLayout } from 'pages/_app';
import { AboutUsLayout } from '@components/about';
import { AboutUsInfo } from '@components/about/about-info/component';
import { withPublic } from '@hocs';

interface Contributor {
  name: string;
  photo: string;
  role: string;
}

interface ContributorsProps {
  contributors: Contributor[];
}

export const getStaticProps = withPublic(async ({ locale }) => {
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
  <AboutUsLayout>
    <AboutUsInfo contributors={contributors} />
  </AboutUsLayout>
);

export default AboutUs;

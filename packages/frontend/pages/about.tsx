import { Layout } from 'components';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';

const AboutPage = () => {
  const data = useTypedSelector((state) => state.randomData.data);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">Go home</Link>
        {JSON.stringify(data)}
      </p>
    </Layout>
  );
};

export default AboutPage;

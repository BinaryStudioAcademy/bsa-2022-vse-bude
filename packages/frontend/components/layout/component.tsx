import Head from 'next/head';
import type { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import type { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

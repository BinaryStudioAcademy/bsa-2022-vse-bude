import { getTitle } from '@helpers';
import Head from 'next/head';
import type { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { StyledMain } from './styles';
import type { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

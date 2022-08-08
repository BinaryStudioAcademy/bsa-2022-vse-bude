/* eslint-disable react/no-unescaped-entities */
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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap');
      </style>
    </Head>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

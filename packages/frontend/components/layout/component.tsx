import { getTitle } from '@helpers';
import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';
import { StringCutter } from 'components/primitives/string-cutter/component';
import { Footer } from '../footer';
import { Header } from '../header';
import type { LayoutProps } from './types';

import * as styles from './styles';

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <React.Fragment>
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
    <Header />
    <main css={styles.main}>{children}</main>
    <div style={{ width: '100px', height: '30px' }}>
      <StringCutter text="dfgdg dgfdg dfdgdgdfdgdf df " />
    </div>
    <Footer />
  </React.Fragment>
);

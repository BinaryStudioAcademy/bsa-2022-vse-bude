import React, { useState } from 'react';
import { CategorySection } from './category-section';
import { CharitySection } from './charity-section';
import { LotSection } from './lot-section';
import { PromoSection } from './promo-section';
import type { HomeProps } from './types';

const Home = ({ auctionProducts, sellingProducts }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <React.Fragment>
      <PromoSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategorySection />
      <LotSection
        title="Popular Lots"
        lots={auctionProducts}
        loadMoreTitle="See All Lots"
      />
      <CharitySection />
      <LotSection
        title="Popular Items"
        lots={sellingProducts}
        loadMoreTitle="See All Items"
      />
    </React.Fragment>
  );
};

export { Home };

import React, { useState } from 'react';
import { CategorySection } from './category-section';
import { CharitySection } from './charity-section';
import { LotSection } from './lot-section';
import { PromoSection } from './promo-section';
import { SellingSection } from './selling-section';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <React.Fragment>
      <PromoSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategorySection />
      <LotSection />
      <CharitySection />
      <SellingSection />
    </React.Fragment>
  );
};

export { Home };

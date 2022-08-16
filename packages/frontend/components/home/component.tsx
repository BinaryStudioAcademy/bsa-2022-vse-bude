import React, { useState } from 'react';
import { PromoSection } from './components/promo-section/component';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <React.Fragment>
      <PromoSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </React.Fragment>
  );
};

export { Home };

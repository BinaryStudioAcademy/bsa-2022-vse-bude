import { IconName } from '@enums';
import { Icon } from '@primitives';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { CategorySection } from './category-section';
import { CharitySection } from './charity-section';
import { LotSection } from './lot-section';
import { PromoSection } from './promo-section';
import type { HomeProps } from './types';

const Home = ({ auctionProducts, sellingProducts }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Icon icon={IconName.FACEBOOK} color="yellow" />
      <Icon icon={IconName.LINKEDIN} color="yellow" />
      <Icon icon={IconName.INSTAGRAM} color="yellow" />
      <PromoSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategorySection />
      <LotSection
        title={t('home:popularLots.title')}
        lots={auctionProducts}
        loadMoreTitle={t('home:popularLots.link')}
      />
      <CharitySection />
      <LotSection
        title={t('home:popularItems.title')}
        lots={sellingProducts}
        loadMoreTitle={t('home:popularItems.link')}
      />
    </React.Fragment>
  );
};

export { Home };

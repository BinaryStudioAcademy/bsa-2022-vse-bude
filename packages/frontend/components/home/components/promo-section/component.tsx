import { Input } from 'components/primitives/input';
import { Container } from 'grapefruit-ui';
import type { ChangeEvent } from 'react';
import { promoMain, title, subTitle, greeting, search } from './styles';
import type { PromoProps } from './types';

const PromoSection = ({ searchQuery, setSearchQuery }: PromoProps) => {
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section>
      <div css={promoMain}>
        <Container>
          <h1 css={title}>Charity auction to help Ukraine</h1>
          <div css={subTitle}>
            Buy and sell goods at auctions and help the Armed Forces of Ukraine.
            Funds for all goods will be redirected to the &quot;Povernysia
            Zhyvym&quot; fund
          </div>
        </Container>
        <div css={search}>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleChangeQuery}
            variant="search"
            placeholder="Search the products"
          />
        </div>
      </div>
      <div css={greeting}>Glory to Ukraine!</div>
    </section>
  );
};

export { PromoSection };

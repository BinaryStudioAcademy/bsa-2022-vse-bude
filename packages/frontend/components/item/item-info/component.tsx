import type { ItemDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import React from 'react';
import { SellerInfo } from './seller-info/component';
import * as styles from './styles';

interface ItemInfoProps {
  item: ItemDto;
}

export const ItemInfo = ({ item }: ItemInfoProps) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleContactSeller = () => {};

  return (
    <div css={styles.wrapper}>
      <table css={styles.table}>
        <tbody>
          {item.type === ProductType.AUCTION && (
            <React.Fragment>
              <tr>
                <td>Ending on</td>
                <td>28.09.2022, 12:00 pm</td>
              </tr>
              <tr>
                <td>Timezone</td>
                <td>GMT +3</td>
              </tr>
            </React.Fragment>
          )}
          <tr>
            <td>The status</td>
            <td>used</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Ukraine, Kyiv</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              {item.description} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptatum labore aspernatur dolore illum sed
              autem, consequatur cupiditate unde quibusdam officiis ipsum amet
              temporibus accusamus maxime, consectetur doloremque voluptas
              voluptatem praesentium.
            </td>
          </tr>
        </tbody>
      </table>
      <SellerInfo
        seller={item.author}
        onContactSeller={() => handleContactSeller()}
      />
    </div>
  );
};

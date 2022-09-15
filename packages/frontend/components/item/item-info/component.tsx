import type { ProductDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { translateCondition } from 'helpers/translate-condition';
import { SellerInfo } from './seller-info/component';
import * as styles from './styles';

interface ItemInfoProps {
  item: ProductDto;
}

export const ItemInfo = ({ item }: ItemInfoProps) => {
  const { t } = useTranslation();

  const getDate = (date) =>
    new Date(date).toLocaleDateString('uk-UA').replaceAll('/', '.');
  const getTime = (date) => new Date(date).toLocaleTimeString('uk-UA');
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleContactSeller = () => {};

  return (
    <div css={styles.wrapper}>
      <table css={styles.table}>
        <tbody>
          {item.type === ProductType.AUCTION && (
            <React.Fragment>
              <tr>
                <td>{t('item:endingCaption')}</td>
                <td>
                  {getDate(item.endDate)} {getTime(item.endDate)}
                </td>
              </tr>
              <tr>
                <td>{t('item:timezoneCaption')}</td>
                <td>{'GMT +3'}</td>
              </tr>
            </React.Fragment>
          )}
          <tr>
            <td>{t('item:statusCaption')}</td>
            <td>{translateCondition(t, item.condition)}</td>
          </tr>
          <tr>
            <td>{t('item:locationCaption')}</td>
            <td>
              {item.country}, {item.city}
            </td>
          </tr>
          <tr>
            <td>{t('item:descriptionCaption')}</td>
            <td>{item.description}</td>
          </tr>
        </tbody>
      </table>
      <SellerInfo
        seller={{ ...item.author, phone: item.phone }}
        onContactSeller={() => handleContactSeller()}
      />
    </div>
  );
};

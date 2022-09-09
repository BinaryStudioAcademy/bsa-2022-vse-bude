﻿import type { ProductDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { SellerInfo } from './seller-info/component';
import * as styles from './styles';

interface ItemInfoProps {
  item: ProductDto;
}

export const ItemInfo = ({ item }: ItemInfoProps) => {
  const { t } = useTranslation('item');

  const getDate = (date) =>
    new Date(date).toLocaleDateString().replaceAll('/', '.');
  const getTime = (date) => new Date(date).toLocaleTimeString();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleContactSeller = () => {};

  return (
    <div css={styles.wrapper}>
      <table css={styles.table}>
        <tbody>
          {item.type === ProductType.AUCTION && (
            <React.Fragment>
              <tr>
                <td>{t('endingCaption')}</td>
                <td>
                  {getDate(item.endDate)} {getTime(item.endDate)}
                </td>
              </tr>
              <tr>
                <td>{t('timezoneCaption')}</td>
                <td>{'GMT +3'}</td>
              </tr>
            </React.Fragment>
          )}
          <tr>
            <td>{t('statusCaption')}</td>
            <td>{item.condition}</td>
          </tr>
          <tr>
            <td>{t('locationCaption')}</td>
            <td>
              {item.country}, {item.city}
            </td>
          </tr>
          <tr>
            <td>{t('descriptionCaption')}</td>
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

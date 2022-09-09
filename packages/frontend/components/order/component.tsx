import { useAppDispatch, useTypedSelector } from '@hooks';
import { Button, Container } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchPurchaseRequestData } from 'store/checkout';
import * as styles from './styles';

export const CheckoutPageInner = () => {
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('checkout');
  const purchaseRequestData = useTypedSelector(
    (state) => state.checkout.purchaseRequestData,
  );

  useEffect(() => {
    if (query.id && typeof query.id === 'string') {
      dispatch(fetchPurchaseRequestData(query.id));
    }
  }, [query.id, dispatch]);

  return (
    <Container css={styles.wrapper}>
      {purchaseRequestData && (
        <form
          method="post"
          action="https://secure.wayforpay.com/pay"
          acceptCharset="utf-8"
        >
          <h1 css={styles.header}>{t('TITLE')}</h1>
          <div css={styles.checkout}>
            <table>
              <tbody>
                <tr>
                  <td>{t('ORDER_ID')}:</td>
                  <td>{purchaseRequestData.orderReference}</td>
                </tr>
                <tr>
                  <td>{t('PRODUCT_NAME')}:</td>
                  <td>{purchaseRequestData.productName}</td>
                </tr>
                <tr>
                  <td>{t('PRODUCT_COUNT')}:</td>
                  <td>{purchaseRequestData.productCount}</td>
                </tr>
                <tr>
                  <td>{t('ORDER_TOTAL')}:</td>
                  <td>{purchaseRequestData.amount} UAH</td>
                </tr>
              </tbody>
            </table>
            <Button type="submit">{t('PAY_BTN')}</Button>
          </div>

          {Object.entries(purchaseRequestData).map(([key, value]) => (
            <input type="hidden" name={key} value={String(value)} key={key} />
          ))}
        </form>
      )}
    </Container>
  );
};

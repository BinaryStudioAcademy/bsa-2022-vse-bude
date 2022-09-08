import { useAppDispatch, useTypedSelector } from '@hooks';
import { Button, Container } from '@primitives';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchPurchaseRequestData } from 'store/checkout';

export const CheckoutPageInner = () => {
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const purchaseRequestData = useTypedSelector(
    (state) => state.checkout.purchaseRequestData,
  );

  useEffect(() => {
    if (query.id && typeof query.id === 'string') {
      dispatch(fetchPurchaseRequestData(query.id as string));
    }
  }, [query.id, dispatch]);

  return (
    <Container>
      {purchaseRequestData && (
        <form
          method="post"
          action="https://secure.wayforpay.com/pay"
          acceptCharset="utf-8"
        >
          <ul>
            <li>Product: {purchaseRequestData?.productName}</li>
            <li>Price: {purchaseRequestData?.productPrice}</li>
            <li>Total: {purchaseRequestData?.amount}</li>
          </ul>
          {Object.entries(purchaseRequestData).map(([key, value]) => (
            <input type="hidden" name={key} value={String(value)} key={key} />
          ))}
          <Button type="submit">Buy</Button>
        </form>
      )}
    </Container>
  );
};

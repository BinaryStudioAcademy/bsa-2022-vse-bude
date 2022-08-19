import { Router } from 'next/router';
import { Spinner } from 'components/primitives/loader/spinner';
import { loaderWrapper } from './styles';
import { useState } from 'react';

export function PagesLoader() {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on('routeChangeStart', () => setIsLoading(true));
  Router.events.on('routeChangeComplete', () => setIsLoading(false));
  Router.events.on('routeChangeError', () => setIsLoading(false));
  return (
    <>
      {isLoading && (
        <div css={loaderWrapper}>
          <Spinner size="big" />
        </div>
      )}
    </>
  );
}

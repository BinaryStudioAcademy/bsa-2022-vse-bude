import { Router } from 'next/router';
import { Spinner } from 'components/primitives/loader/spinner';
import { useState } from 'react';
import { loaderWrapper } from './styles';

function PagesLoader() {
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

export default PagesLoader;

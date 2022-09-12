import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { Http } from '@vse-bude/shared';
import { fetchUserProfileSSR } from 'store/profile/actions';
import { Chat } from '@components/chatPage/user-chat';
import type { ReactElement } from 'react';
import { ChatLayout } from '@components/chatPage/user-chat-layout';
import type { NextPageWithLayout } from 'pages/_app';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale, query } = ctx;

    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale);

    await store.dispatch(
      fetchUserProfileSSR({
        http: httpClient,
        userId: query.id as string,
      }),
    );

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'chat',
        ])),
      },
    };
  }),
);

const Messages: NextPageWithLayout = () => <Chat />;

Messages.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};

export default Messages;
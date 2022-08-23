import { Container } from '@primitives';
import { Layout } from '@components';
import { ApiRoutes, Http } from '@vse-bude/shared';
import { auth, withProtected } from '@helpers';

interface UsersProps {
  users: any[];
}

export const getServerSideProps = withProtected(async () => {
  const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);
  const users = await httpClient.get({ url: ApiRoutes.USERS });

  return { props: { users } };
});

const Users = ({ users }: UsersProps) => (
  <Layout title="Users">
    <Container>
      <h1>Users List</h1>
      <div>
        <pre>{JSON.stringify(users, null, 4)}</pre>
      </div>
    </Container>
  </Layout>
);

export default Users;

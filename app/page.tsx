import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

export const dynamic = 'force-dynamic';

const users = [
  {
    id: 0,
    name: 'string',
    username: 'string',
    email: 'string'
  },
  {
    id: 1,
    name: 'a',
    username: 'a',
    email: 'a'
  },
  {
    id: 2,
    name: 'b',
    username: 'b',
    email: 'b'
  },
  {
    id: 3,
    name: 'c',
    username: 'c',
    email: 'c'
  }
];

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}

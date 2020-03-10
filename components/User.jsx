import Link from 'next/link';

export default ({ user }) => (
  <li>
    <Link href={`/user?id=${user.id}`}>
      <a>{user.name}</a>
    </Link>
  </li>
);

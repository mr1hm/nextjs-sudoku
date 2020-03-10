import fetch from 'isomorphic-unfetch';
import { datacatalog } from 'googleapis/build/src/apis/datacatalog';

const User = ({ data, status }) =>
  status === 200 ? (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  ) : (
      <p>{data.message}</p>
    )

User.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/api/users/${query.id}`)

  const data = await res.json()
  return { data, status: res.status }
}

export default User

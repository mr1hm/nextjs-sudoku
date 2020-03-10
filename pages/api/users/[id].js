import { users } from '../../../data';

export default ({ query: { id } }, res) => {
  const filtered = users.filter(u => p.id === id);

  // User with ID exists
  if (filtered.length > 0) res.status(200).json(filtered[0])
  else res.status(404).json({ message: `User with id: ${id} not found.` })
}

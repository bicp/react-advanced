export function UsersList({ users }) {
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <li>{user.firstname}</li>
      ))}
    </div>
  );
}

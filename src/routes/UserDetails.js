import { useParams } from "react-router-dom";

export function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find((user) => user.id === id);

  return (
    <div>
      <div>firstname: {user.firstname}</div>
      <div>lastname: {user.lastname}</div>
      <div>age: {user.age}</div>
      <div>address: {user.address}</div>
    </div>
  );
}

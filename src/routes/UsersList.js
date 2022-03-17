import { useNavigate } from "react-router-dom";

export function UsersList({ users }) {
  const navigate = useNavigate()
  return (
    <ul className="list">
      {users.map((user) => (
        <li key={user.id} className="list__user">
          <div style={{ display: "flex", gap: "10px" }}>
            <span>{user.firstname}</span>
            <span>{user.lastname}</span>
          </div>
          <button onClick={() => navigate(`/user-details/${user.id}`)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

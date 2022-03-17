import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import { UsersList } from "./routes/UsersList";
import { UserDetails } from "./routes/UserDetails";
import { useState } from "react";

const users_db = [
  {
    id: "1",
    firstname: "john",
    lastname: "doe",
    age: "28",
    address: "57 main st",
  },
  {
    id: "2",
    firstname: "john1",
    lastname: "doe1",
    age: "28",
    address: "57 main st",
  },
  {
    id: "3",
    firstname: "john2",
    lastname: "doe2",
    age: "28",
    address: "57 main st",
  },
];

const posts_db = [
  {id: '1', title: "title1", description: "description1"},
  {id: '2', title: "title2", description: "description2"},
  {id: '3', title: "title3", description: "description3"},
]

function App() {
  const [users, setUsers] = useState(users_db);
  return (
    <div className="app">
      <h1>welcome</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/users-list" />} />
        <Route path="/users-list" element={<UsersList users={users} />} />
        <Route path="/user-details/:id" element={<UserDetails users={users} />} />
      </Routes>
    </div>
  );
}

export default App;

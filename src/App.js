import "./App.css";
import { Collipsible } from "./components/Collipsible";
import { Route, Router, Routes } from "react-router-dom";
import { Section } from "./components/Section";
import { UsersList } from "./routes/UsersList";
import { Posts } from "./routes/Posts";
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

function App() {
  const [users, setUsers] = useState(users_db);
  return (
    <div className="app">
      <h1>welcome</h1>
      <Routes>
        <Route path="/home" element={<UsersList users={users} />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;

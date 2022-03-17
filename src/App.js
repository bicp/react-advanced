import "./App.css";
import { Collipsible } from "./components/Collipsible";
import { Route, Router, Routes } from "react-router-dom";
import { Section } from "./components/Section";
import { Home } from "./routes/Home";
import { Posts } from "./routes/Posts";

function App() {
  return (
    <div className="app">
      <h1>welcome</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;

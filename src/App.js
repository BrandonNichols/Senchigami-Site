import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateMember from "./components/CreateMember";
import Team from "./components/TeamMembers";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/add-member" element={<CreateMember />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Admin from "./component/Admin";
import Profile from "./component/Profile";
import Error from "./component/Error";

function App() {
  // const navigate = useNavigate();
  // const bC = {
  //   background:
  //     "linear-gradient(90deg, rgba(85,0,255,1) 16%, rgba(166,0,255,1) 30%, rgba(85,0,255,1) 48%, rgba(166,0,255,1) 75%, rgba(85,0,255,1) 88%)",
  // }

  return (
    <div className="NB">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Error" element={<Error />} />
      </Routes>

      {/* <div style={{ marginBottom: "25px" }}>
        <button
          onClick={() => {
            navigate("/");
          }}
          style={bC}
        >
          Redirect
        </button>
      </div> */}

      <div id="NL">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/About">About</NavLink>

        <NavLink to="/Contact">Contact</NavLink>

        <NavLink to="/Profile/65130500212">Profile</NavLink>

        <NavLink to="/Admin">For Admin!!</NavLink>
      </div>

      <div></div>
    </div>
  );
}

export default App;

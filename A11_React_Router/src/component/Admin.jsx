import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  useNavigate,
} from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const bC = {
    background:
      "linear-gradient(90deg, rgba(85,0,255,1) 16%, rgba(166,0,255,1) 30%, rgba(85,0,255,1) 48%, rgba(166,0,255,1) 75%, rgba(85,0,255,1) 88%)",
  };

  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

  useEffect(() => {
    if (!isLogin) {
      navigate("/Error");
    }
  }, []);

  return (
    <div>
      <img style={{marginTop:"25px"}} src="../../public/assets/KON KON KITSUNE.gif" alt="Fox"></img>
      <h1>This is Admin Page</h1>

      <div style={{ marginBottom: "25px" }}>
        <button
          onClick={() => {
            localStorage.removeItem("isLogin")
            navigate("/");
          }}
          style={bC}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Admin;

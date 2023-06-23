import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  useNavigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const bC = {
    background:
      "linear-gradient(90deg, rgba(85,0,255,1) 16%, rgba(166,0,255,1) 30%, rgba(85,0,255,1) 48%, rgba(166,0,255,1) 75%, rgba(85,0,255,1) 88%)",
  }

  return (
    <div>
      <h1 className="TE">Hello World</h1>

      <div style={{ marginBottom: "25px" }}>
        <button
          onClick={() => {
            localStorage.setItem("isLogin",true)
            navigate("/Admin");
          }}
          style={bC}
        >
          Login
        </button>
      </div>
      
      

    </div>
  );
}

export default Home;

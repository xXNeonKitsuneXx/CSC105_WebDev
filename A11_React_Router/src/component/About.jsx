import React from "react";
import {
  useNavigate,
} from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const bC = {
    background:
      "linear-gradient(90deg, rgba(85,0,255,1) 16%, rgba(166,0,255,1) 30%, rgba(85,0,255,1) 48%, rgba(166,0,255,1) 75%, rgba(85,0,255,1) 88%)",
  }

  return (
    <div>
    <h1 className="TE">This is About Page</h1>

    <div style={{ marginBottom: "25px" }}>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={bC}
      >
        Redirect
      </button>
    </div>

  </div>
  );
}

export default About;

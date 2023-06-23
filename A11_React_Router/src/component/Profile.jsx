import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function Profile() {
  let { id } = useParams();

  return (
    <div>
      <h1 className="TE">This Student ID of user is {id}</h1>
    </div>
  );
}

export default Profile;

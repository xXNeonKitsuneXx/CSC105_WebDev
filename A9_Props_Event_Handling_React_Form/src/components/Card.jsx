import React from 'react'
import "../styles/card.css";

function Card(props) {
  console.log("PROPS",props.newuser);

  return (
      <div className="Card">
          <p>Name : {props.newuser.Name}</p>
          <p>Job : {props.newuser.Job}</p>
          <p>Hobby : {props.newuser.Hobby}</p>
      </div>
  )
}

export default Card

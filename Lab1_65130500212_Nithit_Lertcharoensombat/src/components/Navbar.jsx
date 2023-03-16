import "./Navbar.css";

import React from 'react'

function Navbar() {
  return (
    <div>
        <h1 className = "task">Task</h1>
        <nav>
            <li>Incoming</li>
            <li>Today</li>
            <li>Calendar</li>
        </nav>
    </div>
  )
}

export default Navbar
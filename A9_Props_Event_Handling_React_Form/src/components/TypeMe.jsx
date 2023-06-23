import { useState } from "react";

function TypeMe() {
    const [getter,setter] = useState(false);
    function handleEvent(value) {
        setter(value) 
        console.log(getter)
    }

    function changeColor(value) {
        if(value==true) {
            return "red"
        }
        else {
            return "white"
        }
    }

    return (
        <div>
            <input 
            onFocus = {() => handleEvent(false)} 
            onBlur = {() => handleEvent(true)}>
            </input>
            <p style={{color: changeColor(getter)}}>Please type in here!</p>
        </div>
    )
}

export default TypeMe;

// import React from 'react'
//
// function TypeMe() {
//     function Pls() {
//         document.getElementById("Focus").innerHTML = "Please type in here!"
//     }

//     return (
//         <div>
//             <input type="text" onBlur={Pls} />
//             <p id="Focus" style={{color: "red"}}></p>
//         </div>
//     )
// }

// export default TypeMe
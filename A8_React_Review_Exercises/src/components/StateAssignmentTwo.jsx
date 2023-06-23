import {useState} from 'react'

function StateAssignmentTwo() {
    const[numbers, setNumbers] = useState([]);
    function handleClick(){
        setNumbers([...numbers,Math.floor(Math.random()*10)]);
    }
  return (
    <section className='S2site'>
        <button onClick={handleClick}> Click me!</button>
        {numbers.map((number) => (
            <li>{number}</li>
        ))}
   </section>
  );
}

export default StateAssignmentTwo
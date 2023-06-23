import { useState } from 'react'
function StateAssignmentOne() {
    const[num, setNum] = useState(0);

    function handleClick(){
        setNum(num+1);
    }
  return (
   <section className='S1site'>
        <button onClick={handleClick}> {num}</button>
   </section>
  );
}

export default StateAssignmentOne
import React, { useState, useEffect } from 'react';

const Counter =() =>{
    const [count, setCount] = useState(0);
 
    const handleClick = () =>
      setCount(currentCount => currentCount + 1);
   
    useEffect(() => (console.log(count)), [
      count,
    ]);
   
    return (
      <button type="button" onClick={handleClick}>
        {count}
      </button>
    );
    }
  

export default Counter;
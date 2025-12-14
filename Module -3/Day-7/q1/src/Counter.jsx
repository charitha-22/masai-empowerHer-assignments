import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    let counterIncrement = ()=>{
        setCount(count+1);
    }
  return (
    <>
        <h3>{count}</h3>
        <button onClick={counterIncrement}>Increment</button>
    </>
  )
}

export default Counter
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incCount = ()=>{
        setCount(prev => prev + 1);
    }

    useEffect(()=>{
        if( count % 3 === 0 && count !== 0){
            alert(`The current number ${count} is divisible by 3`)
        }

    },[count])
  return (
    <>
        <div>Counter</div>
        <h3>Count: {count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </>
  )
}

export default Counter
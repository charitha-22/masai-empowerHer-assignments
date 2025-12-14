import React, { useState } from 'react'

const Calculator = () => {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [operation, setOperation] = useState("add");
    let [results, setResults] = useState([]);

    let handleOperation = (e)=>{
        setOperation(e.target.value)
    }

    let handleInput1 = (e) =>{
        setNum1(e.target.value)
    }

    let handleInput2 = (e) =>{
        setNum2(e.target.value)
    }

    let handleCalculate = ()=>{
        let result;

        let n1 = Number(num1);
        let n2 = Number(num2)
        if(operation == "add"){
            result = n1 + n2;
        }else if(operation == "subtract"){
            result = n1 - n2;
        }else if(operation == "multiply"){
            result = n1 * n2;
        }

        setResults([...results, result]);
    }

  return (
    <>
        <h2>Basic Calculator</h2>
        <input type="number"  id="num1" placeholder='Enter Number 1' onChange={handleInput1} />
        <input type="number"  id="num2" placeholder='Enter Number 2' onChange={handleInput2} />

        <select value={operation} onChange={handleOperation}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
        </select>

        <button onClick={handleCalculate}>Perform Action</button>

        <hr />
        <h3>Result :</h3>
        <ul>
            {results.map((res,index)=>
                <li key={index}>{res}</li>
            )}
        </ul>
    </>
  )
}

export default Calculator
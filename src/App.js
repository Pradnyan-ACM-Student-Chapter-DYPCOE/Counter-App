import React,{useState} from 'react';

import './App.css'


function App() {

  const [count,setCount]= useState(0);

  const handleIncrement=()=>{
  setCount(count+1);
}
  const handleDecrement=()=>{
  setCount(count-1);
}

  return (
    <div className='App'>
    <div className="title">
    COUNTER APP
    </div>

    <div className="count">{count}</div>
    <br></br>
    <button onClick={handleIncrement}>+</button> 
    <button onClick={handleDecrement}>-</button> 
    <div>
    <span style={{margin:"2em",fontSize:"1.5em"}}>Increment</span>
    <span style={{margin:"2em",fontSize:"1.5em"}}>Decrement</span>
    </div>
    </div>
  );
}

export default App;

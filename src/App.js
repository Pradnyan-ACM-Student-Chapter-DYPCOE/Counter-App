import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div className='App'>
      <div className="title">
        COUNTER APP
      </div>

      <div className="count">{count}</div>
      <br />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <div>
        <span className="text">Increment</span>
        <span className="text">Decrement</span>
      </div>
    </div>
  );
}

export default App;
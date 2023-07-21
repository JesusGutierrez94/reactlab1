import React, { useState } from "react";
import "./styles.css";
 
function App() {
 return <Counter />
}

const Counter = () => {
  const [count, setCount] = useState(0);
 
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
 
  return (
    <div className="container">
      <h1 style={{marginBottom: "0px"}}>COUNTER</h1>
      <p className="number">{count}</p>
      <p className="button" onClick={increment}>Increment</p>
      <p className="button" onClick={decrement}>Decrement</p>
      {count > 9 ? <p>Count is to high!</p> : null}
    </div>
  );
};
 
export default App;

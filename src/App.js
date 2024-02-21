import { useState } from 'react';
import './App.css';
import UseMemoComponent from './Component/UseMemoComponent'
function App() {
  const [count ,setCount] = useState(0);
  const handleClick = () =>{
    setCount(count+1);
  }
  return (
    <>
      <button onClick={handleClick}>+</button>
      <h2>{count}</h2>
      <h2>{count==6 ? "It is 6" : "Is it not 6"}</h2>
      <UseMemoComponent count={count}/>
    </>
  );
}

export default App;

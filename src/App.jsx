import React, { useState } from "react";
import ChildComponent from './component/ChildComponent';

function App() {

  const [message, setMessage]= useState('hello, Grand Child');
  const [coins, setCoins] = useState([1, 2, 3, 4, 5])
  return (
    <div>
      <h1>parent Component</h1>
      <hr></hr>
      <ChildComponent message={ message } coins={ coins } />
    </div>
  )
}

export default App

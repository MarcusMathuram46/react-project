/*
  Hooks: 
    - any function that starts with "use" is called a hook
    - they are special functions that are available only while React is rendering.

    To create a counter, where the value is increased as a function of time or at the click of a button.
*/

import React, { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);


  function handleClickAdd() {
    setCounter(counter + 1);
  }
  function handleClickSub() {
    setCounter(counter - 1);
  }
  function handleClickZero() {
    setCounter(0);
  }

  return (
    <div>
      <div>
      <p>{ counter }</p>
      <button onClick={handleClickAdd}>plus</button>
      <button onClick={handleClickSub}>minus</button>
      <button onClick={handleClickZero}>zero</button>
      </div>
    
    </div>
  )
}

export default App;
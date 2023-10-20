import React from 'react';


function GrandChildComponent({ message }) {
  return (
    <div>
      <h1>GrandChildComponent</h1>
      <p>Message from Child Component: { message }</p>
      
    </div>
  )
}

export default GrandChildComponent;

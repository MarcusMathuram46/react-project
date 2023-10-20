import React from 'react';import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GrandChildComponent from './GrandChildComponent';

function ChildComponent({ message }) {
  return (
    <div>
      <h1>ChildComponent</h1>
      <p>Message from Parent: { message }</p>
      <hr></hr>
      <GrandChildComponent message={ message } coins={ coins } />
    </div>
  )
}

export default ChildComponent;

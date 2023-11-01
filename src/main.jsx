import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        id: 1,
        content: 'Html is easy',
        important: true
    },
    {
        id: 2,
        content: 'Browser can only execute javascript',
        important: true
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods',
        important: true
    },
    {
        id: 4,
        content: 'Json server acts like a mock server without a real backend server to serve API endpoints',
        important: true
    },
    {
        id: 5,
        content: 'CRUD with React with routers,useState, useReducers, useContext, useRef hook axios',
        important: true
    },
]
ReactDOM.createRoot(document.getElementById('root')).render(<App notes = { notes } />);

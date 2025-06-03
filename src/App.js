import React from 'react';
import './App.css';

function App() {
  const appTitle = process.env.REACT_APP_TITLE || "React App";
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <h1>Welcome to {appTitle}</h1>
        <p>
          This is a simple React application for CI/CD demonstration.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
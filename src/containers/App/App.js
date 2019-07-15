import React from 'react';
import logo from '../../assets/images/logo_dark.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my portfolio
        </p>
        <a href="https://www.linkedin.com/in/freelancecliff/">linkedin</a>
      </header>
    </div>
  );
}

export default App;

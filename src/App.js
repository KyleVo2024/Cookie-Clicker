import logo from './cookie.png';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [cookies, setCookies] = useState(0);
  var cookie = 1/cookies+"s";
  function clicked() {
    setCookies(cookies + 1)
    cookie = 1/(Math.log(cookies)+1)+"s";
    document.documentElement.style
      .setProperty('--cookies',cookie);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Christmas Clicker
        </p>
        {cookies}
        <img src={logo} className="App-logo" alt="logo" onClick={() => clicked()}></img>
      </header>
    </div>
  );
}
export default App;

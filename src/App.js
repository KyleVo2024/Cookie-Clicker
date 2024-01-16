import logo from './cookie.png';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [cookies, setCookies] = useState(0);
  const [grandma, setgrandma] = useState(0);
  var cookie = 1/cookies+"s";
  const Store = [
    {
      "Name": "Grandma",
      "Cost": 100,
      "CPS": 10
    },
    {
      "Name": "farms",
      "Cost": 100,
      "CPS": 10
    }
  ];
  function clicked() {
    setCookies(cookies + 1)
    cookie = 1 / (Math.log(cookies) + 1) + "s";
    document.documentElement.style
      .setProperty('--cookies', cookie);
  }

  function buy(Name) {
    setgrandma(grandma +1)
  }
  return (
    <div className="App">
      <header className="App-header">
      {cookies}

        <img src={logo} className="App-logo" alt="logo" onClick={() => clicked()}></img>
        <button onClick={this.buy(Name)}>Duck</button>
        {grandma}
      </header>
    </div>
  );
}
export default App;

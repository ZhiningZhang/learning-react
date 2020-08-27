import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import HelloClassCom from './Components/HelloClassCom'

function App() {
  return (
<div>
  <HelloWorld name="Cindy" age="10"/>
  <p>
  <HelloClassCom name="Andy"/>
  </p>
</div>
  );
}

export default App;

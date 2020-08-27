import React, {useState} from 'react';
import logo from './logo.svg';
import HelloWorld from './Components/HelloWorld'
import HelloClassCom from './Components/HelloClassCom'
import CounterExample from './FuncComponents/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
<div>

  <Header/>
  <HelloWorld name="Andy"/>
  <Footer/>
</div>
  );
}

export default App;

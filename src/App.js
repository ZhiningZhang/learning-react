import React, { useState } from "react";
import logo from "./logo.svg";
import HelloWorld from "./Components/HelloWorld";
import HelloClassCom from "./Components/HelloClassCom";
import CounterExample from "./FuncComponents/CounterExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <HelloWorld name="Andy" />

        <Switch>
          <Route exact path="/">
            <h2>This is home page</h2>
          </Route>
          <Route path="/about">
            <h1 className="text-gray-900">This is About page</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
      
      <h2>aaaa {Math.random()}</h2>
    </div>
  );
}

export default App;

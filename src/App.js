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
      <Header />
      <HelloWorld name="Andy" />
      <Router>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">
              About
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <h2>This is home page</h2>
          </Route>
          <Route path="/about">
            <h1 className="text-gray-300">This is About page</h1>
          </Route>
        </Switch>
      </Router>
      <Footer />
  <h2>aaaa {Math.random()}</h2>
    </div>
  );
}

export default App;

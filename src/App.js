import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelloWorld from "./Components/HelloWorld";
import HelloClassCom from "./Components/HelloClassCom";
import CounterExample from "./FuncComponents/CounterExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>

<HelloWorld name="Andy" />
      <h2>aaaa {Math.random()}</h2>
    </div>
  );
}

export default App;

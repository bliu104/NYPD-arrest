import React from "react";
import "./App.css";
import Container from "./components/Container";
import { Route, Link, Switch } from "react-router-dom";
import Appdetails from "./components/Appdetails";
import Header from "./components/Header";
import symbols from "./components/symbols";

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/symbols">Infograph Symbols</Link>
        <br />
        <Link to="/details">Infograph Details</Link>
      </nav>

      <main>
        <Switch>
          <Route exact path={"/"} component={Container} />
          <Route path={"/details"} component={Appdetails} />
          <Route path={"/symbols"} component={symbols} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

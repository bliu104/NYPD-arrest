import React from "react";
import "./App.css";
import Container from "./components/Container";
import { Route, Link, Switch } from "react-router-dom";
import Appdetails from "./components/Appdetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="containerClass" />
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/details">Infograph Details</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path={"/"} />
          <Route path={"/details"} component={Appdetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

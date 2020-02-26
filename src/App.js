import React from "react";
import "./App.css";
import Container from "./components/Container";
import Precinctdetails from "./components/Precinctdetails";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Container className="containerClass" />
    </div>
  );
}

export default App;

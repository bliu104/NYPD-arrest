import React from "react";
import "./App.css";
import Container from "./components/Container";
import Precinctdetails from "./components/Precinctdetails";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Container /> */}

      <main>
        <Switch>
          <Route exact path={"/"} component={Container} />
          <Route
            exact
            path={"/Container/:arrest_precinct"}
            component={Precinctdetails}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Container from "./Container";

class Precinctdetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <Container arrest_precinct={this.props.match.params.arrest_precinct} />
      </div>
    );
  }
}

export default Precinctdetails;

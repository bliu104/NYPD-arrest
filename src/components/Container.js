import React from "react";
import { Component } from "react";
import axios from "axios";
import Crimestats from "./Crimestats";
import Criminalstats from "./Criminalstats";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeData: [],
      isLoaded: false,
      isLoading: false,
      pID: "105"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event) {
    const value = event.target.value;
    this.setState({ pID: value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const response = await axios.get(
      `https://data.cityofnewyork.us/resource/uip8-fykc.json?arrest_precinct=${this.state.pID}`
    );

    this.setState({
      crimeData: response.data,
      isLoaded: true
    });
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <div className="search">
        Arrest For Precinct {this.state.pID}
        <br />
        <form onSubmit={this.handleSubmit}>
          <input onKeyPress={this.handleChange} />
        </form>
        {isLoaded ? (
          <>
            <Criminalstats criminal={this.state.crimeData} />
            <Crimestats crime={this.state.crimeData} />
          </>
        ) : null}
      </div>
    );
  }
}

export default Container;

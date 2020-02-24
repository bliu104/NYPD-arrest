import React from "react";
import { Component } from "react";
import axios from "axios";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      crimeData: []
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/uip8-fykc.json?arrest_precinct=105"
    );
    this.setState({ crimeData: response.data });
    // console.log(response.data[0].pd_desc);
  }

  getData = () => {
    return this.state.crimeData.map(data => {
      console.log(data.pd_desc);
      return (
        <div>
          <div>{data.pd_desc}</div>
          <div>{data.pd_desc}</div>
          <div>{data.pd_desc}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        Arrest For Precinct 105
        {this.getData()}
      </div>
    );
  }
}

export default Container;

import React from "react";
import { Component } from "react";
import axios from "axios";
import Crimestats from "./Crimestats";
import Criminalstats from "./Criminalstats";

import { Link } from "react-router-dom";

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

    // console.log(value);

    // if (event.key === "Enter") {
    //   if (this.setState.pID === value) {
    //     console.log("error bitch");
    //   } else {
    //     this.setState({ pID: value });

    //     const response = await axios.get(
    //       `https://data.cityofnewyork.us/resource/uip8-fykc.json?arrest_precinct=${this.state.pID}`
    //     );

    //     this.setState({
    //       crimeData: response.data,
    //       isLoaded: true
    //     });
    //   }
    // }
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("submitting");
    const response = await axios.get(
      `https://data.cityofnewyork.us/resource/uip8-fykc.json?arrest_precinct=${this.state.pID}`
    );

    this.setState({
      crimeData: response.data,
      isLoaded: true
    });
  }

  // async componentDidMount() {
  //   const response = await axios.get(
  //     `https://data.cityofnewyork.us/resource/uip8-fykc.json?arrest_precinct=${this.state.pID}`
  //   );

  //   this.setState({
  //     crimeData: response.data,
  //     isLoaded: true
  //   });

  //   // console.log(response.data[0].pd_desc);
  // }

  // getData = () => {
  //   return this.state.crimeData.map(data => {
  //     //console.log(data.pd_desc);
  //     return (
  //       <>
  //         {data.pd_desc && (
  //           <div>
  //             <Crimestats crime={data.pd_desc} />
  //             {/* <div>{data.arrest_date}</div>
  //         <div>{data.pd_desc}</div>
  //         <div>{data.AGE_GROUP}</div>
  //         <div>{data.PERP_SEX}</div>
  //         <div>{data.PERP_RACE}</div> */}
  //           </div>
  //         )}
  //       </>
  //     );
  //   });
  // };

  render() {
    const { isLoaded } = this.state;
    //console.log(isLoaded);
    // const arr = this.state.crimeData.map((crime, index) => {
    //   return <Crimestats crime={crime} />;
    //   // crimeInfo = {crime[index]['pd_desc']}
    // });

    console.log(this.state.crimeData);
    return (
      <div className="search">
        Arrest For Precinct {this.state.pID}
        <br />
        <form onSubmit={this.handleSubmit}>
          <input onKeyPress={this.handleChange} />
        </form>
        {isLoaded ? (
          <>
            {/* <Link to={`Container/:${this.state.pID}`} /> */}

            <Criminalstats criminal={this.state.crimeData} />
            <Crimestats crime={this.state.crimeData} />
          </>
        ) : null}
        {/* {this.state.crimeData && this.getData()} */}
      </div>
    );
  }
}

export default Container;

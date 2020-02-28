import React from "react";
import data from "../file";

function Appdetails() {
  const mapping = () => {
    return data.map(info => {
      return <div>{info}</div>;
    });
  };
  return (
    <div className="listOfPrecinct">
      <br /> List of Precinct <br />
      {mapping()}
    </div>
  );
}

export default Appdetails;

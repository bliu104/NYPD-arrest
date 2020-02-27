import React from "react";
import data from "../file";

function Appdetails() {
  console.log(data);
  const mapping = () => {
    return data.map(info => {
      return <div>{info}</div>;
    });
  };
  return (
    <div>
      <br /> List of Precinct <br />
      {mapping()}
    </div>
  );
}

export default Appdetails;

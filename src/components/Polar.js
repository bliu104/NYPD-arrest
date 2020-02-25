import React from "react";
import { Bar } from "react-chartjs-2";

function Polaring(props) {
  return (
    <div>
      <h2>Polar Example</h2>
      <Bar data={props.crimedata} />
    </div>
  );
}

export default Polaring;

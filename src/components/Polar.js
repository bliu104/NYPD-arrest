import React from "react";
import { Bar } from "react-chartjs-2";

function Polaring(props) {
  return (
    <div>
      <Bar data={props.crimedata} />
    </div>
  );
}

export default Polaring;

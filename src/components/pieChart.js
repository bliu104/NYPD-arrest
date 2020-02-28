import React from "react";
import { Pie } from "react-chartjs-2";

function pieChart(props) {
  const data = props.crimedata;

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default pieChart;

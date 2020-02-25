import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

function pieChart(props) {
  const data = props.crimedata;

  return (
    <div>
      <h2>Crime</h2>
      <Pie data={data} />
    </div>
  );
}

export default pieChart;

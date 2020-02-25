import React from "react";
import { Doughnut } from "react-chartjs-2";

function HorizontalBarComp(props) {
  return (
    <div>
      <h2>Horizontal Bar Example</h2>
      <Doughnut data={props.stuffdata} />
    </div>
  );
}

export default HorizontalBarComp;

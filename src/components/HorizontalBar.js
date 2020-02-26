import React from "react";
import { Doughnut } from "react-chartjs-2";

function HorizontalBarComp(props) {
  return (
    <div>
      <Doughnut data={props.stuffdata} />
    </div>
  );
}

export default HorizontalBarComp;

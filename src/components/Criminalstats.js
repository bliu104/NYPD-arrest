import React from "react";
import Piechart from "./pieChart";
import HorizontalBarComp from "./HorizontalBar";
import Polar from "./Polar";

function Criminalstats(props) {
  let male = 0;
  let female = 0;

  let black = 0,
    asian = 0,
    white = 0,
    hispanic = 0,
    native_american = 0,
    other = 0;

  let youth = 0,
    middle = 0,
    old = 0,
    madOld = 0;

  props.criminal.map((criminalInfo, index) => {
    if (criminalInfo.perp_sex.includes("M")) {
      male++;
    } else {
      female++;
    }

    if (
      criminalInfo.perp_race.includes("BLACK") &&
      !criminalInfo.perp_race.includes("HISPANIC")
    ) {
      black++;
    } else if (
      criminalInfo.perp_race.includes("WHITE") &&
      !criminalInfo.perp_race.includes("HISPANIC")
    ) {
      white++;
    } else if (criminalInfo.perp_race.includes("HISPANIC")) {
      hispanic++;
    } else if (criminalInfo.perp_race.includes("ASIAN")) {
      asian++;
    } else if (criminalInfo.perp_race.includes("AMERICAN INDIAN")) {
      native_american++;
    } else {
      other++;
    }

    if (criminalInfo.age_group.includes("18-24")) {
      youth++;
    } else if (criminalInfo.age_group.includes("25-44")) {
      middle++;
    } else if (criminalInfo.age_group.includes("45-64")) {
      old++;
    } else {
      madOld++;
    }
  });
  const data = {
    datasets: [
      {
        data: [black, white, asian, hispanic, native_american, other],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "salmon",
          "peru",
          "black"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "salmon",
          "peru",
          "black"
        ]
      }
    ],

    labels: ["black", "white", "asian", "hispanic", "native_american", "other"]
  };

  const datagender = {
    labels: ["male", "female"],
    datasets: [
      {
        label: "Gender Crime",
        backgroundColor: ["lightblue", "pink"],
        hoverBackgroundColor: ["blue", "tomato"],
        data: [male, female]
      }
    ]
  };
  const Age = {
    datasets: [
      {
        data: [youth, middle, old, madOld],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
        label: "Criminal's Age"
      }
    ],
    labels: ["18-24", "25-44", "45-64", "65+"]
  };

  return (
    <div>
      <div className="Criminal_Gender">
        Gender
        <br />
        <br />
        Male:{male}
        <br />
        Female:{female}
        <div className="genderData">
          <HorizontalBarComp stuffdata={datagender} />
        </div>
      </div>
      <div className="criminal_Race">
        <div className="pieChart2">
          <Piechart crimedata={data} />
        </div>
        Criminal race <br /> Black: {black}
        <br />
        White:{white} <br />
        Hispanic:{hispanic}
        <br />
        Asian:{asian}
        <br />
        Native American: {native_american}
        <br />
        Other: {other}
      </div>
      <div className="Criminal_Age">
        Criminal Age
        <br />
        18-24: {youth}
        <br />
        25-44: {middle}
        <br />
        45-64: {old}
        <br />
        65+: {madOld}
        <div className="agechart">
          <Polar crimedata={Age} />
        </div>
      </div>
    </div>
  );
}

export default Criminalstats;

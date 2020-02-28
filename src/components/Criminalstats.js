import React from "react";
import Piechart from "./pieChart";
import HorizontalBarComp from "./HorizontalBar";
import Polar from "./Polar";
import { IoIosMan, IoIosWoman } from "react-icons/io";

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
  let arrblack = [];
  let arrwhite = [];
  let arrasian = [];
  let arrhispanic = [];
  let arrnativeAmerican = [];
  let arrother = [];

  const peopleRace = () => {
    let temp = black / 10;
    while (temp > 0) {
      temp--;
      arrblack.push(<IoIosMan className="black" />);
    }
    let temp2 = white / 10;
    while (temp2 > 0) {
      temp2--;
      arrwhite.push(<IoIosMan className="white" />);
    }
    let temp3 = asian / 10;
    while (temp3 > 0) {
      temp3--;
      arrasian.push(<IoIosMan className="asian" />);
    }
    let temp4 = hispanic / 10;
    while (temp4 > 0) {
      temp4--;
      arrhispanic.push(<IoIosMan className="hispanic" />);
    }
    let temp5 = native_american / 10;
    while (temp5 > 0) {
      temp5--;
      arrnativeAmerican.push(<IoIosMan className="native_american" />);
    }
    let temp6 = other / 10;
    while (temp6 > 0) {
      temp6--;
      arrother.push(<IoIosMan className="other" />);
    }
  };

  let arr = [];
  let arr2 = [];

  const peopleGeneration = () => {
    let temp = male / 25;
    while (temp > 0) {
      temp--;
      arr.push(<IoIosMan className="man" />);
    }
    let temp2 = female / 25;
    while (temp2 > 0) {
      temp2--;
      arr2.push(<IoIosWoman className="women" />);
    }
  };

  const Age = {
    datasets: [
      {
        data: [youth, middle, old, madOld],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
        label: "age"
      }
    ],
    labels: ["18-24", "25-44", "45-64", "65+"]
  };

  return (
    <div>
      {peopleGeneration()}
      {peopleRace()}
      <h2>Crimes Commited by Gender</h2>
      <div className="outlayer_CG">
        <div className="Criminal_Gender">
          <div className="genderInfo">
            <div className="genderArr">
              {arr}
              {arr2}
            </div>
            <div className="genderstats">
              Numbers of Arrests by Gender:
              <br />
              Male: {male}
              <br />
              Female: {female}
            </div>
          </div>
          <div className="genderData">
            <HorizontalBarComp stuffdata={datagender} />
          </div>
        </div>
      </div>
      <h2>Crimes Commited By Ethncity</h2>
      <div className="criminal_Race">
        <div className="pieChart2">
          <Piechart crimedata={data} />
        </div>
        <div className="names">
          <div className="raceArr">
            <ul>
              {arrblack}
              {arrwhite}
              {arrasian}
              {arrhispanic}
              {arrnativeAmerican}
              {arrother}
            </ul>
          </div>
          Number of Arrest By Ethncity
          <ul className="raceList">
            <li>Black: {black}</li>
            <li>White:{white}</li>
            <li>Hispanic:{hispanic}</li>
            <li>Asian:{asian}</li>
            <li>Native American: {native_american}</li>
            <li>Other: {other}</li>
          </ul>
        </div>
      </div>
      <h2>Crimes Commited By Age</h2>
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

import React from "react";
import Piechart from "./pieChart";
import { GiDeathSkull, GiPunch, GiRayGun, GiEvilMinion } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { FaCarAlt, FaPills, FaMoneyBillAlt, FaChild } from "react-icons/fa";
function Crimestats(props) {
  let murder = 0;
  let assault = 0;
  let sexual = 0;
  let vehicle = 0;
  let drug = 0;
  let stole = 0;
  let unknown = 0;
  let child = 0;
  let harrassment = 0;
  let weapon = 0;

  const stuff = props.crime.map(crime => {
    if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("ASSAULT") || crime.pd_desc.includes("BREATH"))
    ) {
      assault++;
    } else if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("MURDER") ||
        crime.pd_desc.includes("STRANGULATION"))
    ) {
      murder++;
    } else if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("SEXUAL") || crime.pd_desc.includes("UNDER 17"))
    ) {
      sexual++;
    } else if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("VEHICLE") ||
        crime.pd_desc.includes("TRAFFIC") ||
        crime.pd_desc.includes("ACCIDENT") ||
        crime.pd_desc.includes("DRIVING"))
    ) {
      vehicle++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("WEAPON")) {
      weapon++;
    } else if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("DRUG") || crime.pd_desc.includes("SUBSTANCE"))
    ) {
      drug++;
    } else if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("STOLEN") ||
        crime.pd_desc.includes("LARCENY") ||
        crime.pd_desc.includes("FRAUD") ||
        crime.pd_desc.includes("ROBBERY") ||
        crime.pd_desc.includes("FORGERY") ||
        crime.pd_desc.includes("BURGLARY") ||
        crime.pd_desc.includes("MENACING"))
    ) {
      stole++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("SEXUAL")) {
      sexual++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("CHILD")) {
      child++;
    } else if (
      crime.pd_desc != null &&
      (crime.pd_desc.includes("HARASSMENT") ||
        crime.pd_desc.includes("MISCHIEF") ||
        crime.pd_desc.includes("COERCION") ||
        crime.pd_desc.includes("CONTEMPT") ||
        crime.pd_desc.includes("TRESPASS") ||
        crime.pd_desc.includes("LEWDNESS"))
    ) {
      harrassment++;
    } else {
      unknown++;
    }
  });
  const dataset = {
    labels: [
      "murder",
      "assault",
      "sexual",
      "vehicle",
      "drug",
      "stole",
      "child",
      "harrassment",
      "weapon"
    ],
    datasets: [
      {
        data: [
          murder,
          assault,
          sexual,
          vehicle,
          drug,
          stole,
          child,
          harrassment,
          weapon
        ],
        backgroundColor: [
          "black",
          "red",
          "pink",
          "brown",
          "blue",
          "green",
          "yellow",
          "orange",
          "purples"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "blue",
          "salmon",
          "peru",
          "black",
          "green",
          "purples"
        ]
      }
    ]
  };
  let crimeArr = [];

  const infoGraphCrime = () => {
    let temp = murder / 10;
    while (temp > 0) {
      temp--;
      crimeArr.push(<GiDeathSkull />);
    }
    let temp1 = assault / 10;
    while (temp1 > 0) {
      temp1--;
      crimeArr.push(<GiPunch style={{ color: "red" }} />);
    }
    let temp2 = sexual / 10;
    while (temp2 > 0) {
      temp2--;
      crimeArr.push(<IoMdPeople style={{ color: "pink" }} />);
    }
    let temp3 = vehicle / 10;
    while (temp3 > 0) {
      temp3--;
      crimeArr.push(<FaCarAlt style={{ color: "brown" }} />);
    }
    let temp4 = drug / 10;
    while (temp4 > 0) {
      temp4--;
      crimeArr.push(<FaPills style={{ color: "blue" }} />);
    }
    let temp5 = stole / 10;
    while (temp5 > 0) {
      temp5--;
      crimeArr.push(<FaMoneyBillAlt style={{ color: "green" }} />);
    }
    let temp6 = weapon / 10;
    while (temp6 > 0) {
      temp6--;
      crimeArr.push(<GiRayGun style={{ color: "purple" }} />);
    }
    let temp7 = child / 10;
    while (temp7 > 0) {
      temp7--;
      crimeArr.push(<FaChild style={{ color: "yellow" }} />);
    }
    let temp8 = harrassment / 10;
    while (temp8 > 0) {
      temp8--;
      crimeArr.push(<GiEvilMinion style={{ color: "orange" }} />);
    }
  };

  return (
    <div className="crimearray">
      <h2>Crimes Commited In Types</h2>
      <div className="crimes">
        {stuff}
        {infoGraphCrime()}
        <div className="outterLayerCrime">
          <div className="crimearr">{crimeArr}</div>
          <div className="crimeNumber">
            <ul className="crimeList">
              <li>Murders {murder}</li>
              <li>Assaults {assault}</li>
              <li>Sexual Crimes {sexual}</li>
              <li>Vehicle Crimes {vehicle}</li>
              <li>Drugs Crimes {drug}</li>
              <li>Robbery {stole}</li>
              <li>Weapon Crime {weapon}</li>
              <li>Child Abuse {child}</li>
              <li>Menacing {harrassment}</li>
              <li>Etc {unknown}</li>
            </ul>
          </div>
        </div>
        <div className="piechart1">
          <Piechart crimedata={dataset} />
        </div>
      </div>
    </div>
  );
}

export default Crimestats;

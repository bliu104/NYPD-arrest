import React from "react";

function Crimestats(props) {
  let murder = 0;
  let assault = 0;
  let sexual = 0;
  let vehicle = 0;
  let drug = 0;
  let stole = 0;
  let unknown = 0;
  // console.log(props.crime[0].pd_desc);
  // const crimeStr = props.crime;
  // console.log(crimeStr);

  const stuff = props.crime.map((crime, index) => {
    if (crime.pd_desc != null && crime.pd_desc.includes("ASSAULT")) {
      assault++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("MURDER")) {
      murder++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("SEXUAL")) {
      sexual++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("VEHICLE")) {
      vehicle++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("DRUG")) {
      drug++;
    } else if (crime.pd_desc != null && crime.pd_desc.includes("STOLEN")) {
      stole++;
    } else {
      unknown++;
    }
    // if (crime[index].pd_desc.includes("MURDER")) {
    //   murder++;
    // }
  });

  return (
    <div>
      {stuff}
      Numbers of Murders: {murder}
      <br />
      Numbers of Assaults: {assault}
      <br />
      Number of Sexual crimes: {sexual}
      <br />
      Number of Vehicle crime: {vehicle}
      <br />
      Number of Drugs crime: {drug}
      <br />
      Number of stealy crime: {stole}
      <br />
      ETC: {unknown}
    </div>
  );
}

export default Crimestats;

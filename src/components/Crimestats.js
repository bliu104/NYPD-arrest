import React from "react";

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
  // console.log(props.crime[0].pd_desc);
  // const crimeStr = props.crime;
  // console.log(crimeStr);

  const stuff = props.crime.map((crime, index) => {
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
      Number of Weapon crime: {weapon}
      <br />
      Number of Child related crime: {child}
      <br />
      Number of Menacing crime: {harrassment}
      <br />
      ETC: {unknown}
    </div>
  );
}

export default Crimestats;

import React from "react";
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
function Criminalstats(props) {
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
  return (
    <div>
      <div>
        Criminal Gender
        <br />
        <br />
        Male:{male}
        <br />
        Female:{female}
      </div>
      <div>
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
      <div>
        Criminal Age
        <br />
        18-24: {youth}
        <br />
        25-44: {middle}
        <br />
        45-64: {old}
        <br />
        65+: {madOld}
      </div>
    </div>
  );
}

export default Criminalstats;
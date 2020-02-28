import React from "react";
import { IoIosMan, IoIosWoman, IoMdPeople } from "react-icons/io";
import { GiDeathSkull, GiPunch, GiRayGun, GiEvilMinion } from "react-icons/gi";
import { FaCarAlt, FaPills, FaMoneyBillAlt, FaChild } from "react-icons/fa";
function symbol() {
  return (
    <div>
      <ul className="symbols">
        <li>
          <IoIosMan style={{ color: "Blue" }} /> Man
        </li>
        <li>
          <IoIosWoman style={{ color: "Pink" }} /> Woman
        </li>
        <li>
          <IoMdPeople style={{ color: "pink" }} /> sex crime
        </li>
        <li>
          <GiDeathSkull /> Murders
        </li>
        <li>
          <GiPunch style={{ color: "red" }} />
          Assault
        </li>
        <li>
          <GiRayGun style={{ color: "purple" }} />
          Gun Crime
        </li>
        <li>
          <FaCarAlt style={{ color: "Brown" }} />
          Vehicle
        </li>
        <li>
          <GiEvilMinion style={{ color: "orange" }} />
          Menacing
        </li>
        <li>
          <FaPills style={{ color: "blue" }} />
          Drugs
        </li>
        <li>
          <FaMoneyBillAlt style={{ color: "green" }} />
          Robberies
        </li>
        <li>
          <FaChild style={{ color: "yellow" }} />
          Child Abuse
        </li>
      </ul>
    </div>
  );
}

export default symbol;

import React from "react";
import "./NavHead.css";
import NavHeadButton from "./NavHeadButton";
import Logo from "../../Assets/Images/Logo1.png";

const NavHead = ({ navbar }) => {
  return (
    <div className={navbar ? "nav_head nav_head-hidden" : "nav_head"}>
      <div className="logo_holder">
        <img alt="" src={Logo} />
      </div>
      <div className="head_link-wrapper">
        <NavHeadButton
          children="RENTAL OWNER LOGIN"
          destination="https://acmpm.managebuilding.com/manager/"
        />
        <div className="head-seperate"></div>
        <NavHeadButton
          children="RESIDENT LOGIN"
          destination="https://acmpm.managebuilding.com/Resident/portal/login"
        />
        <div className="head-seperate"></div>
        <NavHeadButton
          children="BOARD MEMBER LOGIN"
          destination="https://acmpm.managebuilding.com/manager/"
        />
        <div className="head-seperate"></div>
        <NavHeadButton
          children="MAKE A PAYMENT"
          destination="https://acmpm.managebuilding.com/Resident/portal/login"
        />
      </div>

      <div className="nav_pay-button"></div>
    </div>
  );
};

export default NavHead;

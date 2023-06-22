import React, {useEffect, useState} from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import "./Navbar.css";
import Logo from "../../Assets/Images/Logo2.png";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { GrTechnology } from 'react-icons/gr';
import { GiPortal} from 'react-icons/gi';
import { RiPagesLine } from 'react-icons/ri';
import Button from "../Reusable/Button";

function NavBar() {


const [navbar, setNavbar] = useState(false)

const changeNav = () => {
  if (window.scrollY >= 160) {
    setNavbar(true);
  } else {
    setNavbar(false);
  }
};

window.addEventListener('scroll', changeNav)


  return (
    <div className="navbar">
      <div className={navbar ? "nav_head nav_head-hidden" : "nav_head"}>
        <div className="logo_holder">
          <img alt="" src={Logo} />
        </div>
        <div className="head_link-wrapper">
          <li className="nav_head-button">RENTAL OWNER LOGIN</li>
          <div className="head-seperate"></div>
          <li className="nav_head-button">RESIDENT LOGIN</li>
          <div className="head-seperate"></div>
          <li className="nav_head-button">BOARD MEMBER LOGIN</li>
          <div className="head-seperate"></div>
          <li className="nav_head-button">MAKE A PAYMENT</li>
          
        </div>
        {/* <div className="topNav_button-wrapper">
            <Button styleType="navPay">
                MAKE A PAYMENT
            </Button>

        </div> */}
        <div className="nav_pay-button"></div>
      </div>
      <div className="nav_main">
        <li className="nav-button">HOME</li>
        <li className="nav-button">AVAILABLE UNITS</li>
        <li className="nav-button">
          SERVICES
          <BsChevronDown className="nav_chevron-down" />
          <ul className="sub-menu">
            <div>
              <div className="arrow-up"></div>
            </div>
            <li className="sub-category">
              <HiOutlineCurrencyDollar className="nav_sub-icon" />
              Sales
              <div>
               
                  <BsArrowRight className="nav-arrow" />
                
              </div>
            </li>
            <li className="sub-category">
              <MdManageAccounts className="nav_sub-icon" />
              Property Management
              <div>
              <BsArrowRight className="nav-arrow" />

              </div>
            </li>
            <li className="sub-category">
              <FaHome className="nav_sub-icon" />
              HOA Management
              <div>
              <BsArrowRight className="nav-arrow" />

              </div>
            </li>
          </ul>
        </li>
        <li className="nav-button">
          RENTAL OWNERS
          <BsChevronDown className="nav_chevron-down" />
          <ul className="sub-menu">
            <div>
              <div className="arrow-up"></div>
            </div>
            <li className="sub-category">
            <RiPagesLine className="nav_sub-icon" />
                Resources
                <div>
              <BsArrowRight className="nav-arrow" />

              </div>
                </li>
            <li className="sub-category">
            <GiPortal className="nav_sub-icon" />
                Rental Owner Portal
            <div>
              <BsArrowRight className="nav-arrow" />

              </div>
            </li>
          </ul>
        </li>

        <li className="nav-button">
          RESIDENTS
          <BsChevronDown className="nav_chevron-down" />
          <ul className="sub-menu">
            <div>
              <div className="arrow-up"></div>
            </div>
            <li className="sub-category">
             <RiPagesLine className="nav_sub-icon" />
            Resources
            <div>
              <BsArrowRight className="nav-arrow" />

              </div>
            </li>
            <li className="sub-category">
            <GiPortal className="nav_sub-icon" />
                Resident Portal
                <div>
              <BsArrowRight className="nav-arrow" />

              </div>
                </li>
          </ul>
        </li>
        <li className="nav-button">LOCAL SERVICES</li>
        <li className="nav-button">ABOUT US</li>
        <li className="nav-button">CONTACT US</li>
      </div>
    </div>
  );
}

export default NavBar;

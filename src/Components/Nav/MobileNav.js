import React, { useState } from "react";
import "./MobileNav.css";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiPortal } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import NavButton from "./NavButton";
import Logo from '../../Assets/Images/Logo3.png';
import Backdrop from './Backdrop'
import SideDrawer from "./SideDrawer";
import MobileList from "./MobileList";

function MobileNav() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const changeNav = () => {
    if (window.scrollY >= 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className="mobile-nav">

    {open && <Backdrop onClick={toggle} />}
    <SideDrawer show={open} children={<MobileList />} toggle={toggle} />
       <div className="mobile-logo_holder">
          <img alt="" src={Logo} />
        </div>

      <div className="mobile-hamburger" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* <div className="mobile-nav_main">
        <NavButton children="HOME" destination="/" />
        <NavButton children="AVAILABLE UNITS" destination="https://acmpm.managebuilding.com/Resident/public/home" />

        <NavButton
          children="SERVICES"
          expand={true}
          sub={[
            {
              title: "Sales",
              icon: <HiOutlineCurrencyDollar className="mobile-nav_sub-icon" />,
              destination:"/sales"
            },
            {
              title: "Property Management",
              icon: <MdManageAccounts className="mobile-nav_sub-icon"/>,
              destination:"/propertymanagement"
            },
            {
              title: "HOA Management",
              icon: <FaHome className="mobile-nav_sub-icon" />,
              destination:"/hoamanagement"
            },
          ]}
        />

        <NavButton
          children="RENTAL OWNERS"
          expand={true}
          sub={[
            {
              title: "Resources",
              icon: <RiPagesLine className="mobile-nav_sub-icon" />,
              destination: "/ownerresources"
            },
            {
              title: "Rental Owner Portal",
              icon: <GiPortal className="mobile-nav_sub-icon" />,
              destination: "https://acmpm.managebuilding.com/manager/"
            },
          ]}
        />

        <NavButton
          children="RESIDENTS"
          expand={true}
          sub={[
            {
              title: "Resources",
              icon: <RiPagesLine className="mobile-nav_sub-icon" />,
              destination: "/residentresources"
            },
            {
              title: "Resident Portal",
              icon: <GiPortal className="mobile-nav_sub-icon" />,
              destination: "https://acmpm.managebuilding.com/Resident/portal/login"
            },
          ]}
        />

        <NavButton children="LOCAL SERVICES" destination="/services" />
        <NavButton children="ABOUT US" destination="/about" />
        <NavButton children="CONTACT US" destination="/contact"/>
      </div> */}
    </div>
  );
}

export default MobileNav;

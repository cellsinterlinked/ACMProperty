import React, { useState } from "react";
import "./MobileNav.css";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiPortal } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import NavButton from "./NavButton";
import Logo from "../../Assets/Images/Logo3.png";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";
import MobileList from "./MobileList";

function MobileNav() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

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
      <SideDrawer
        show={open}
        children={<MobileList toggle={toggle} />}
        toggle={toggle}
      />
      <div className="mobile-logo_holder">
        <img alt="" src={Logo} />
      </div>

      <div className="mobile-hamburger" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MobileNav;

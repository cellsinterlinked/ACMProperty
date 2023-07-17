import React, { useState } from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiPortal } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import NavHead from "./NavHead";
import NavButton from "./NavButton";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className="navbar">
      <NavHead navbar={navbar} />

      <div className="nav_main">
        <NavButton children="HOME" destination="/" />
        <NavButton
          children="AVAILABLE UNITS"
          destination="https://acmpm.managebuilding.com/Resident/public/home"
        />

        <NavButton
          children="SERVICES"
          expand={true}
          sub={[
            {
              title: "Sales",
              icon: <HiOutlineCurrencyDollar className="nav_sub-icon" />,
              destination: "/sales",
            },
            {
              title: "Property Management",
              icon: <MdManageAccounts className="nav_sub-icon" />,
              destination: "/propertymanagement",
            },
            {
              title: "HOA Management",
              icon: <FaHome className="nav_sub-icon" />,
              destination: "/hoamanagement",
            },
          ]}
        />

        <NavButton
          children="RENTAL OWNERS"
          expand={true}
          sub={[
            {
              title: "Resources",
              icon: <RiPagesLine className="nav_sub-icon" />,
              destination: "/ownerresources",
            },
            {
              title: "Rental Owner Portal",
              icon: <GiPortal className="nav_sub-icon" />,
              destination: "https://acmpm.managebuilding.com/manager/",
            },
          ]}
        />

        <NavButton
          children="RESIDENTS"
          expand={true}
          sub={[
            {
              title: "Resources",
              icon: <RiPagesLine className="nav_sub-icon" />,
              destination: "/residentresources",
            },
            {
              title: "Resident Portal",
              icon: <GiPortal className="nav_sub-icon" />,
              destination:
                "https://acmpm.managebuilding.com/Resident/portal/login",
            },
          ]}
        />

        <NavButton children="LOCAL SERVICES" destination="/services" />
        <NavButton children="ABOUT US" destination="/about" />
        <NavButton children="CONTACT US" destination="/contact" />
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import "./MobileList.css";
import { Link } from "react-router-dom";
import Image1 from "../../Assets/Images/foot-icon1.png";
import Image2 from "../../Assets/Images/foot-icon2.png";
import Image3 from "../../Assets/Images/foot-icon3.png";
import Image4 from "../../Assets/Images/equal-housing-opportunity-logo-1200w.webp";

const MobileList = ({ toggle }) => {
  return (
    <div className="mobile-list-wrapper">
      <div className="mobile-list-top">
        <div className="top-list-box">
          <Link to="/" onClick={toggle}>
            Home
          </Link>
          <Link
            to="https://acmpm.managebuilding.com/Resident/public/home"
            onClick={toggle}
          >
            Available Units
          </Link>
          <Link to="/services">Local Services onClick={toggle}</Link>
        </div>
        <div className="top-list-box">
          <Link to="/about" onClick={toggle}>
            About Us
          </Link>

          <Link to="/contact" onClick={toggle}>
            Contact
          </Link>
        </div>
      </div>
      <div className="mobile-list-top">
        <div className="top-list-box">
          <h2>Owners</h2>
          <span className="nav-seperator"></span>
          <Link to="/ownerresources" onClick={toggle}>
            Resources
          </Link>
          <Link
            to="/https://acmpm.managebuilding.com/manager/"
            onClick={toggle}
          >
            Owner Portal
          </Link>
        </div>
        <div
          className="top-list-box"
          style={{ borderLeft: "1px solid rgba(128, 128, 128, 0.592)" }}
        >
          <h2>Residents</h2>
          <span className="nav-seperator"></span>
          <Link to="residentresources" onClick={toggle}>
            Resources
          </Link>
          <Link
            to="https://acmpm.managebuilding.com/Resident/portal/login"
            onClick={toggle}
          >
            Resident Portal
          </Link>
        </div>
      </div>
      <div className="mobile-list-top">
        <div className="top-list-box">
          <h2>Services</h2>
          <span className="nav-seperator"></span>
          <Link to="/sales" onClick={toggle}>
            Sales
          </Link>
          <Link to="/propertymanagement" onClick={toggle}>
            Property Management
          </Link>
          <Link to="/hoamanagement" onClick={toggle}>
            HOA Management
          </Link>
        </div>
        <div
          className="top-list-box"
          style={{ borderLeft: "1px solid rgba(128, 128, 128, 0.592)" }}
        >
          <h2>Tools</h2>
          <span className="nav-seperator"></span>
          <Link to="https://acmpm.managebuilding.com/manager/" onClick={toggle}>
            Rental Owner Login
          </Link>
          <Link
            to="https://acmpm.managebuilding.com/Resident/portal/login"
            onClick={toggle}
          >
            Resident Login
          </Link>
          <Link to="https://acmpm.managebuilding.com/manager/" onClick={toggle}>
            Board Member Login
          </Link>
          <Link
            to="https://acmpm.managebuilding.com/Resident/portal/login"
            onClick={toggle}
          >
            Make a Payment
          </Link>
        </div>
      </div>
      <div className="drawer-bottom-logos">
        <div style={{ backgroundColor: "black" }}>
          <img alt="" src={Image1} />
        </div>
        <div>
          <img alt="" src={Image2} />
        </div>
        <div>
          <img alt="" src={Image3} />
        </div>
        <div>
          <img alt="" src={Image4} />
        </div>
      </div>
    </div>
  );
};

export default MobileList;

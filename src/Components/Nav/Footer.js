import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Image1 from '../../Assets/Images/foot-icon1.png';
import Image2 from '../../Assets/Images/foot-icon2.png';
import Image3 from '../../Assets/Images/foot-icon3.png';
import Image4 from '../../Assets/Images/equal-housing-opportunity-logo-1200w.webp';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-column">
        <h3>SERVICES</h3>
        <Link to="https://acmpm.managebuilding.com/Resident/portal/login">
          Resident Login
        </Link>
        <Link to="https://acmpm.managebuilding.com/manager/">
          Board Member Login
        </Link>
        <Link to="https://acmpm.managebuilding.com/manager/">Owner Login</Link>
        <Link to="https://acmpm.managebuilding.com/Resident/portal/login">
          Make a Payment
        </Link>
      </div>
      <div className="footer-column">
        <h3>MANAGEMENT</h3>
        <Link to="/propertymanagement">Property Management</Link>
        <Link to="/hoamanagement">HOA Management</Link>
        <Link to="https://acmpm.managebuilding.com/Resident/public/home">
          Available Units
        </Link>
      </div>
      <div className="footer-column">
        <h3>REAL ESTATE</h3>
        <Link to="/sales">Sales</Link>
        <Link to="/survey">Wish List</Link>
        <Link to="/localservices">Local Services</Link>
      </div>
      <div className="footer-column">
        <h3>CONTACT</h3>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Linkage</Link>
        <Link>Phone</Link>
        <Link>Email</Link>
      </div>
      <div className="footer-line">


        
      </div>
      <div className="footer-column-icon">
        <div className="stupid-icon-wrapper">
        <img alt="" src={Image1} />

        </div>
      </div>
      <div className="footer-column-icon">
        <img alt="" src={Image2} />
      </div>
      <div className="footer-column-icon">
        <img alt="" src={Image3} />
      </div>
      <div className="footer-column-icon">
        <img alt=""  src={Image4} />
      </div>
    </div>
  );
};

export default Footer;

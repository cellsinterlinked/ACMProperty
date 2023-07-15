import React from "react";
import "./MobileList.css";
import { Link } from "react-router-dom";
import Logo from '../../Assets/Images/Logo3.png';
import Image1 from '../../Assets/Images/foot-icon1.png';
import Image2 from '../../Assets/Images/foot-icon2.png';
import Image3 from '../../Assets/Images/foot-icon3.png';
import Image4 from '../../Assets/Images/equal-housing-opportunity-logo-1200w.webp';

const MobileList = () => {
  return (
    <div className="mobile-list-wrapper">
        {/* <div className="mobile-drawer-logo">
            <img alt="" src={Logo}/>

        </div> */}
      <div className="mobile-list-top">
        <div className="top-list-box">
          <Link>Home</Link>
          <Link>Available Units</Link>
          <Link>Local Services</Link>
        </div>
        <div className="top-list-box">
          <Link>About Us</Link>

          <Link>Contact</Link>
        </div>
      </div>
      <div className="mobile-list-top">
        <div className="top-list-box">
          <h2>Owners</h2>
          <span className="nav-seperator"></span>
          <Link>Resources</Link>
          <Link>Owner Portal</Link>
        </div>
        <div className="top-list-box" style={{borderLeft: "1px solid rgba(128, 128, 128, 0.592)"}}>
          <h2>Residents</h2>
          <span className="nav-seperator"></span>
          <Link>Resources</Link>
          <Link>Resident Portal</Link>
        </div>
      </div>
      <div className="mobile-list-top">
        <div className="top-list-box">
          <h2>Services</h2>
          <span className="nav-seperator"></span>
          <Link>Sales</Link>
          <Link>Property Management</Link>
          <Link>HOA Management</Link>
        </div>
        <div className="top-list-box" style={{borderLeft: "1px solid rgba(128, 128, 128, 0.592)"}} >
          <h2>Tools</h2>
          <span className="nav-seperator"></span>
          <Link>Rental Owner Login</Link>
          <Link>Resident Login</Link>
          <Link>Board Member Login</Link>
          <Link>Make a Payment</Link>
        </div>
      </div>
      <div className="drawer-bottom-logos">
        <div style={{backgroundColor: "black"}}>
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

import React from "react";
import "./Areas.css";
import Map from "../../Assets/Images/Component 1.png";

const Areas = () => {
  return (
    <div className="areas-wrapper">
      <div className="head-ban-wrapper">
        <h2>Areas We Serve...</h2>
        <div className="head-ban-div"></div>
        <p>
          We serve communities of southeastern and central Indiana. We are
          always finding ways to adapt to our clients. If your service area is
          not listed, please contact us
        </p>
      </div>

      <div className="areas-info">
        <ul>
          <li>Johnson</li>
          <li>Brown</li>
          <li>Bartholemew</li>
        </ul>
        <ul>
          <li>Jackson</li>
          <li>Shelby</li>
          <li>Decatur</li>
        </ul>
        <ul>
          <li>Washington</li>
          <li>Clark</li>
          <li>Scott</li>
        </ul>
        <ul>
          <li>Jefferson</li>
          <li>Jennings</li>
          <li>Ripley</li>
        </ul>
      </div>
      {/* </div> */}

      <div className="areas-map-wrapper">
        <img alt="" src={Map} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Areas;

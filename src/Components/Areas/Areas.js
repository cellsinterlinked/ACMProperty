import React from "react";
import "./Areas.css";
import Map from "../../Assets/Images/Component 1.png";

const Areas = () => {
  return (
    <div className="areas-wrapper">
      <div className="banner">
        <div className="banner-end"></div>
        <div className="banner-start-top"></div>
        <div className="banner-start-bottom"></div>
        <h1>Areas We Serve...</h1>
      </div>
      <div className="areas-content">
        <div className="areas-shadow">
          <div className="areas-info">
            <h2>Counties</h2>
            <ul>
              <li>Johnson</li>
              <li>Brown</li>
              <li>Bartholemew</li>
              <li>Jackson</li>
              <li>Shelby</li>
              <li>Decatur</li>
              <li>Washington</li>
              <li>Clark</li>
              <li>Scott</li>
              <li>Jefferson</li>
              <li>Jennings</li>
              <li>Ripley</li>
            </ul>
            <p>
              We are always finding ways to adapt to our clients. If your
              service areas isnot listed, please contact us.
            </p>
          </div>
        </div>

        <div className="areas-map-wrapper">
          <img alt="" src={Map} />
        </div>
      </div>
    </div>
  );
};

export default Areas;

import React from "react";
import "./Reasons.css";
import { BsShieldFillCheck } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillSignStopFill } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";
import { AiFillTool } from "react-icons/ai";
import { GiFreedomDove } from "react-icons/gi";
import Protection from "../Assets/Images/building-surveyor-wearing-hard-hat-with-clipboard-2021-08-30-08-39-36-utc.jpg";
import Revenue from "../Assets/Images/money-or-revenue-growth-concept-stacking-coins-an-2022-11-17-22-00-49-utc.jpg";
import Maintenance from "../Assets/Images/contemporary-young-mechanic-from-household-mainten-2021-09-24-03-09-38-utc.jpg";
import Freedom from "../Assets/Images/happy-family-hiking-together-in-autumn-mountains-2022-11-02-02-40-36-utc.jpg";

const Reasons = () => {
  return (
    <div className="reasons_wrapper">
      <div className="reasons_content">
        <div className="reasons-head">

        <h2><strong className="text-accent-green_title">R</strong>easons to Hire ACM Property Management, LLC</h2>
        <div className="head-divider"></div>
        <p>
          Before committing to any property management firm, knowing how they
          will benefit you and your investments is essential. There are many
          reasons why hiring ACM property Management, LLC would be beneficial to
          you, but some of the most prominent are listed below.
        </p>
        </div>

        <div className="sphere_wrapper">
          <div className="sphere">
            <div className="reason_image-wrapper">
              <img alt="" src={Protection} />
            </div>
            <div className="card-third">
              <h2>Investment Protection</h2>
              <div className="head-divider"></div>
            </div>
            <div className="card-half">
              <p>Protect your invenetment with periodic inspections. </p>
            </div>
          </div>

          <div className="sphere">
            <div className="reason_image-wrapper">
              <img alt="" src={Revenue} />
            </div>
            <div className="card-third">
              <h2>Increased Revenue</h2>
            </div>
            <div className="card-half">
              <p>Rent collections are consistent and thorough. </p>
            </div>
          </div>

          <div className="sphere">
            <div className="reason_image-wrapper">
              <img alt="" src={Maintenance} />
            </div>
            <div className="card-third">
              <h2>Preventative Maintenance</h2>
            </div>
            <div className="card-half">
              <p>Catch the small things, to prevent the big things </p>
            </div>
          </div>

          <div className="sphere">
            <div className="reason_image-wrapper">
              <img alt="" src={Freedom} />
            </div>
            <div className="card-third">
              <h2>Freedom</h2>
            </div>
            <div className="card-half">
              <p>
                Create space for freedom in your life by letting us handle the
                responsibility.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;

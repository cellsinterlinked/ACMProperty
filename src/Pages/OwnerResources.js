import React from "react";
import "./OwnerResources.css";
import Button from "../Components/Reusable/Button";
import Image1 from "../Assets/Images/CRM.png";
import Image2 from "../Assets/Images/Tax 2.png";
import ResourceBox from "../Components/Reusable/ResourceBox";
const OwnerResources = () => {
  const videoToggle = () => {
    console.log("toggling");
  };

  return (
    <>
      <div className="o-resources_wrapper">
        <div className="resource-head">
          <div className="r-head-box1">
            <p className="r-head-sm">RESOURCES/OWNERS</p>
            <h2>Rental Owner Portal</h2>
            <p className="resources-text">
              The Rental Owner portal is a fast, secure and convenient way for
              Rental Owners to manage funds and run reports. Rental Owners will
              have full transparency about everything that goes on with their
              properties at their finger tips.
            </p>
            <Button styleType="resource-head-button">Go To Portal</Button>
          </div>
          <div className="r-head-box2">
            <div className="videoThumb">
              <img
                className="thumb"
                alt=""
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1660872263/Realty/Owner_nsjvx6.png"
              ></img>
              <button onClick={videoToggle} className="playButton">
                <div className="triangle"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="resource-list-container">
          <ResourceBox
            children={
              <>
                <p>- 24/7 Automated Financials</p>
                <p>- Mobile App</p>
                <p>- Direct communication with property managers</p>
                <p>- Top of the line property management software solutions</p>
              </>
            }
            image={Image1}
            title="Perks & Features"
          />
          <ResourceBox
            children={
              <>
                <p>- W-9 Form</p>
                <p>- Rental Owner Portal Guide</p>
                <p>- Indiana Civil Rights Fact Sheet</p>
              </>
            }
            image={Image2}
            title="Forms & Guides"
          />
        </div>
      </div>

      <div style={{ marginBottom: "4rem" }}></div>
    </>
  );
};

export default OwnerResources;

import React from "react";
import "./OwnerResources.css";
import Button from "../Components/Reusable/Button";
import Image1 from "../Assets/Images/85 - ONLINE PAYMENT.png";
import Image2 from "../Assets/Images/VNU_M652_02.png";
import ResourceBox from "../Components/Reusable/ResourceBox";

const ResidentResources = () => {
  const videoToggle = () => {
    console.log("toggling");
  };
  return (
    <>
      <div className="o-resources_wrapper">
        <div className="resource-head desktop-padding">
          <div className="r-head-box1">
            <p className="r-head-sm">
              <strong className="bold">RESOURCES</strong>/RESIDENTS
            </p>
            <h2>Resident Center</h2>
            <p className="resources-text">
              The Resident Center is a fast, secure and convenient way for
              residents to make payments, submit, requests, and view any
              important documents. Residents will have everything they need at
              their fingertips!
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
                <p>
                  - Make cash payments at local stores such as Walmart, Casey's
                  CGVS, Walgreens and more!
                </p>
                <p>- Mobile App</p>
                <p>- Rent Reporting</p>
                <p>- Renters Insurance</p>
              </>
            }
            image={Image1}
            title="Perks & Features"
          />
          <ResourceBox
            children={
              <>
                <p>- Resident Center Guide</p>
                <p>- Renters Insurance Guide</p>
                <p>- Rent Reporting</p>
                <p>- Notice to Vacate</p>
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

export default ResidentResources;

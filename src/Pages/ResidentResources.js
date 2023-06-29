import React from "react";
import "./ResidentResources.css";
import NavBar from "../Components/Nav/Navbar";
import Footer from "../Components/Nav/Footer";
import Button from "../Components/Reusable/Button";
import Image1 from "../Assets/Images/85 - ONLINE PAYMENT.png";
import Image2 from "../Assets/Images/VNU_M652_02.png";

const ResidentResources = () => {
  const videoToggle = () => {
    console.log("toggling");
  };
  return (
    <>
      <NavBar />
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

        <div className="perks-wrapper desktop-padding">
          <div className="resource-ghost">
            <div className="perks-box">
              <div className="perks-box-left">
                <h2>Perks & Features</h2>
                <p>- Make cash payments at local stores such as Walmart, Casey's CGVS, Walgreens and more!</p>
                <p>- Mobile App</p>
                <p>- Rent Reporting</p>
                <p>- Renters Insurance</p>
              </div>
              <div className="perks-box-right">
                <div className="resource-image-box">
                  <img alt="" src={Image1} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="forms-wrapper desktop-padding">
          <div className="resource-ghost">
            <div className="forms-box">
              <div className="forms-box-left">
                <div className="resource-image-box2">
                  <img alt="" src={Image2} />
                </div>
              </div>
              <div className="forms-box-right">
                <h2>Forms & Guides</h2>
                <p>- Resident Center Guide</p>
                <p>- Renters Insurance Guide</p>
                <p>- Rent Reporting</p>
                <p>- Notice to Vacate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "4rem" }}></div>
      <Footer />
    </>
  );
};

export default ResidentResources;

import React from "react";
import "./OwnerResources.css";
import NavBar from "../Components/Nav/Navbar";
import Footer from "../Components/Nav/Footer";
import Button from "../Components/Reusable/Button";
import Image1 from "../Assets/Images/CRM.png";
import Image2 from '../Assets/Images/Tax 2.png';
const OwnerResources = () => {
    const videoToggle = () => {
        console.log("toggling")
    }

  return (
    <>
      <NavBar />
      <div className="o-resources_wrapper">
        <div className="resource-head desktop-padding">
          <div className="r-head-box1">
            <p className="r-head-sm">
              <strong className="bold">RESOURCES</strong>/OWNERS
            </p>
            <h2>Rental Owner Portal</h2>
            <p className="resources-text">
              The Rental Owner portal is a fast, secure and convenient way for
              Rental Owners to manage funds and run reports. Rental Owners will
              have full transparency about everything that goes on with their
              properties at their finger tips!{" "}
            </p>
            <Button styleType="resource-head-button">Go To Portal</Button>
          </div>
          <div className="r-head-box2">
            
          <div className="videoThumb">
            <img className="thumb" alt="" src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1660872263/Realty/Owner_nsjvx6.png" ></img>
            <button onClick={videoToggle} className="playButton">
            <div className="triangle">

            </div>
            </button>
            </div>

          </div>
        </div>

        <div className="perks-wrapper desktop-padding">
          <div className="resource-ghost">
            <div className="perks-box">
              <div className="perks-box-left">
                <h2>Perks & Features</h2>
                <p>- 24/7 Automated Financials</p>
                <p>- Mobile App</p>
                <p>- Direct communication with property managers</p>
                <p>- Top of the line property management software solutions</p>
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
                <p>- W-9 Form</p>
                <p>- Rental Owner Portal Guide</p>
                <p>- Indiana Civil Rights Fact Sheet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginBottom: "4rem"}}></div>

      <Footer />
    </>
  );
};

export default OwnerResources;

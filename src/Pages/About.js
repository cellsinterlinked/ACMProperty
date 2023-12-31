import React from "react";
import "./About.css";

import Image1 from "../Assets/Images/Home Checking.png";
import HeadImage from "../Assets/Images/Logo nBack.png";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-header">
          <div className="about-head-1">
            <h2>About Us</h2>\<div className="head-divider-sm"></div>
            <p>
              ACM Property Management, LLC is a fast-growing premier property
              management company servicing Southern Indiana. Our team comprises
              individuals with experience in many fields, ranging from Finance
              Management, Real Estate Sales, and Legal Research to Policy
              Analysis. This diverse set of skills, knowledge, and experience
              primes ACM Property Management, LLC to manage its clients' assets.
            </p>
          </div>

          <div className="about-head-2">
            <di className="about-head-image">
              <img alt="" src={HeadImage} />
            </di>
          </div>
        </div>
        <div className="about-body">
          <div className="about-body-1">
            <div className="about-image">
              <img alt="" src={Image1} />
            </div>
          </div>
          <div className="about-body-2">
            <h2>Our Mission</h2>
            <p>
              At ACM Property Management, LLC, out mission is to become the
              go-to property management company for investors, HOAs, and other
              clients by driving efficiencies through technology and providing
              innovative, transparent solutions.
            </p>
            <h2>Our Values</h2>
            <p>
              At ACM Property Management, LLC, we like doing this differently.
              Our different approach is evidenced by the transparency, kindness,
              grace, professionalism, humility, and integrity we carry ourselves
              with.
            </p>
          </div>
        </div>
        <div className="about-close">
          <div className="about-mobile-image">
            <img alt="" src={Image1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

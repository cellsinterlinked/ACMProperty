import React from "react";
import "./Premium.css";
import image1 from "../Assets/Images/female-relaxing-on-couch-holding-remote-controlle-2022-12-16-09-10-52-utc.jpg";
import PremiumList from "../Components/Package/PremiumList";

const Premium = () => {
  return (
    <div className="package-wrapper">
      <div className="package-header">
        <div className="package-header-contents">
          <h1>PROPERTY MANAGEMENT/PACKAGES</h1>
          <h2>Premium</h2>
          <h3>FREE STRUCTURE</h3>
          <p>14% of monthly collected rent income, including late fees</p>
          <p>$45 minimum fee</p>
          <h3>ADDITIONAL ONE-TIME FEES</h3>
          <p>
            Onboarding fees - $30 per unit, if there are tenants alreading
            residing in the home
          </p>
        </div>
        <div className="package-header-image">
          <div>
            <img alt="" src={image1} />
          </div>
        </div>
      </div>
      <div className="package-intro">
        <div className="p-intro-1">
          <h2 className="included">WHATS INCLUDED</h2>
          <p>
            Designed for investors who want to avoid involvement with their
            rental properties, the premium package completely removes the rental
            owner from managing their investments.
          </p>
          <p>This package includes the following services</p>
        </div>
        <div className="p-intro-2">
          <ul>
            <li>
              <div className="bullet"></div>Rent Collections
            </li>
            <li>Owner and Tenant Portal Access</li>
            <li>Legal Compliance</li>
            <li>Move-In & Move-Out Inspection</li>
            <li>Financial Reporting</li>
            <li>Lease Renewal</li>
            <li>Digital Document Signing</li>
            <li>Prepared Lease</li>
            <li>Vacancy Listing</li>
            <li>Tenant Screening</li>
            <li>Maintenance Management</li>
            <li>Lease Enforcement</li>
            <li>Periodic Inspections</li>
            <li>Utility Coordination</li>
            <li>Eviction Process</li>
          </ul>
        </div>
      </div>
      <div className="package-contents">
        <PremiumList />
      </div>
    </div>
  );
};

export default Premium;

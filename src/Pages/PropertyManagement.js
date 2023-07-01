import React from "react";
import "./PropertyManagement.css";
import PropertyImg from "../Assets/Images/clipboard-with-property-management-agreement-pen-2023-05-19-20-05-48-utc.jpg";
import Pricing from "../Components/PropertyManagement/Pricing";

const PropertyManagement = () => {
  return (
    <>
      <div className="p-management_wrapper">
        <div className="p-management-header">
          <div className="p-head-1">
            <p className="p-head-zazz">MANAGEMENT</p>
            <h2>Property Management</h2>
            <p>
              An exceptional service array, paired with a unique rate structure,
              allows ACM Property Management LLC to offer the flexibility Rental
              Owners and HOAs search for in property managers
            </p>
            <p>
              At ACM Property Management, transparency and honesty are
              essential. We value your time, property, and business. Here's what
              you need to know:
            </p>
          </div>

          <div className="p-head-2">
            <div className="p-head-image">
              <img alt="" src={PropertyImg} />
            </div>
          </div>

          <div className="p-management-details">
            <div className="p-detail">
              <h2>No Hidden Fees</h2>
              <p>Rest assured, no hidden fees are wrapped into our services.</p>
            </div>
            <div className="p-detail">
              <h2>No Contract</h2>
              <p>
                ACM Property Management LLC wants clients to utilize their
                services because they are of value, not because of a locked-in
                contract.
              </p>
            </div>
            <div className="p-detail">
              <h2>Signed Non-Disclosure Agreements</h2>
              <p>
                The ACM Property Management team signs a legally binding
                Non-Disclosure Agreement with you. Trust is critial, and your
                business is private.
              </p>
            </div>
            <div className="p-detail">
              <h2>Access to professional software</h2>
              <p>
                We want the best for you, your tenants, and us. Because of this,
                we use the industry's leading property management software
                solution.
              </p>
            </div>
          </div>
        </div>

        <Pricing />
      </div>
    </>
  );
};

export default PropertyManagement;

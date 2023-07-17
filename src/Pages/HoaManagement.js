import React, { useState } from "react";
import "./HoaManagement.css";
import HOAImage from "../Assets/Images/the-concept-of-buying-or-selling-real-estate-mort-2022-03-31-06-18-30-utc.jpg";
import HOAContact from "../Components/HOAManagement/HOAContact";
import HOAList from "../Components/Package/HOAList";

const HaoManagement = () => {
  return (
    <>
      <div className="h-management_wrapper">
        <div className="h-management-header">
          <div className="h-head-1">
            <p className="h-head-zazz">MANAGEMENT</p>
            <h2>HOA Management</h2>
            <p>
              With residents in mind, ACM Property Management has structured its
              HOA management services to help foster strong community
              relationships within associations.
            </p>
            <p>
              The industry's best property management technology solutions,
              professional experience, and the drive to provide Indiana's bbest
              management services gives ACM Property Management,LLC the
              competitive edge.
            </p>
          </div>

          <div className="h-head-2">
            <div className="h-head-image">
              <img alt="" src={HOAImage} />
            </div>
          </div>
        </div>

        <div className="hoa-pt-2">
          <div className="hoa-services-list">
            <h2>Our HOA Management Services...</h2>
            <p>
              When you decide to work with ACM Property Management, LLC you can
              expect to recieve the following services
            </p>
            <ul>
              <li> Accounts Receivable</li>
              <li> Violations</li>
              <li> Resident/Board Member Portals</li>
              <li> Resident Communications</li>
              <li> Acounts Payable</li>
              <li> Financial Management</li>
              <li> Vendor Contract Management</li>
              <li> Legal Compliance</li>
              <li> Maintain Common Areas</li>
              <li> Maintenance Management</li>
            </ul>
          </div>

          <HOAContact />
        </div>

        <div className="hoa-pt3">
          <HOAList />
        </div>
      </div>
    </>
  );
};

export default HaoManagement;

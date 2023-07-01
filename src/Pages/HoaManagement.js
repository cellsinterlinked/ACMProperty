import React, { useState } from "react";
import "./HoaManagement.css";
import HOAImage from "../Assets/Images/the-concept-of-buying-or-selling-real-estate-mort-2022-03-31-06-18-30-utc.jpg";
import Input from "../Components/Forms/Input";
import Button from "../Components/Reusable/Button";

const HaoManagement = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [association, setAssociation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [resNum, setResNum] = useState("");
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
          <div className="hoa-form-wrapper">
            <div className="hoa-form">
              <p className="hoa-pizzazz">Direct Email/Contact</p>
              <h2>Request a Proposal</h2>
              <p>
                Please fill out all of the inputs below before hitting submit.
                We will be in contact with you as soon as possible.
              </p>
              <Input
                type="text"
                value={first}
                name="firstName"
                placeholder="First Name"
                onChange={(e) => setFirst(e.target.value)}
                styleType="hoa-style"
              />
              <Input
                type="text"
                value={last}
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => setLast(e.target.value)}
                styleType="hoa-style"
              />
              <Input
                type="text"
                value={association}
                name="associationName"
                placeholder="Association Name"
                onChange={(e) => setAssociation(e.target.value)}
                styleType="hoa-style"
              />
              <Input
                type="number"
                value={phone}
                name="phone"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                styleType="hoa-style"
              />
              <Input
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                styleType="hoa-style"
              />

              <div className="location-info-wrapper">
              <Input
                type="text"
                value={city}
                name="city"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                styleType="hoa-style-med"
              />
                <Input
                type="text"
                value={state}
                name="state"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
                styleType="hoa-style-sm"
              />
                <Input
                type="number"
                value={zip}
                name="zipCode"
                placeholder="Zip Code"
                onChange={(e) => setZip(e.target.value)}
                styleType="hoa-style-sm"
              />
              </div>
              <Input
                type="text"
                value={resNum}
                name="resNum"
                placeholder="Number of Residences"
                onChange={(e) => setResNum(e.target.value)}
                styleType="hoa-style"
              />
              <Button styleType="hoa-proposal-button">SUBMIT</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HaoManagement;

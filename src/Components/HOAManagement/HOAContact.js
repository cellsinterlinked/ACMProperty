import React, {useState} from 'react'
import Input from '../Forms/Input';
import Button from '../Reusable/Button';
import './HOAContact.css';

const HOAContact = () => {

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [association, setAssociation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [resNum, setResNum] = useState("");


    return(
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
    )
}

export default HOAContact;
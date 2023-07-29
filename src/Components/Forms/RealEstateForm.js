import React, { useState, useRef, useEffect } from "react";
import Input from "../Forms/Input";
import "../HOAManagement/HOAContact.css";
import { Button, Modal } from "antd";
import emailjs from "@emailjs/browser";

const RealEstateForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [invalid, setInvalid] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [bModalOpen, setBModalOpen] = useState(false);

  const handleSuccessCancel = () => {
    setModalOpen(false);
  };

  const handleSuccessOpen = () => {
    setModalOpen(true);
  };

  const handleFailCancel = () => {
    setBModalOpen(false);
  };

  const handleFailOpen = () => {
    setBModalOpen(true);
  };

  useEffect(() => {
    let valid = true;
    if (first.length < 2) {
      setInvalid(true);
      return;
    }
    if (last.length < 2) {
      setInvalid(true);
      return;
    }
    if (phone.length < 10) {
        setInvalid(true);
        return;
    }
    if (email.length < 2) {
        setInvalid(true);
        return;
    }

    if (address.length < 2) {
      setInvalid(true);
      return;
    }
    if (city.length < 2) {
      setInvalid(true);
      return;
    }
    if (state.length < 2) {
      setInvalid(true);
      return;
    }
    if (zip.length < 5) {
      setInvalid(true);
      return;
    }
    setInvalid(!valid);
  }, [first, last, phone, zip.length, city.length, state.length,  email.length, address.length]);


  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_4rkj86x",
        "template_ldinmwh",
        form.current,
        "user_hbc7uXk6VzJ9iJYYOUNTt"
      )
      .then((res) => {
        setFirst("");
        setLast("");
        setPhone("");
        setEmail("");
        setState("")
        setCity("")
        setZip("")
        setAddress("")
        setInvalid(true);
        handleSuccessOpen()
        console.log(res.text);
      })
      .catch((err) => {
        handleFailOpen()
        console.log(err.text);
      });
  };

  return (
    <div className="hoa-form-wrapper">
        <Modal
        title="Success!"
        open={modalOpen}
        onOk={handleSuccessCancel}
        footer={[
          <Button
            onClick={handleSuccessCancel}
            type="primary"
            key="back"
            style={{
              backgroundColor: "#642198",
            }}
          >
            Return
          </Button>,
        ]}
      >
        <p>
          Your message has been sent! We will respond as soon as we can, and
          look forward to speaking with you!
        </p>
      </Modal>

      <Modal
        title="Oops!"
        open={bModalOpen}
        onOk={handleFailCancel}
        footer={[
          <Button
            onClick={handleFailCancel}
            type="primary"
            key="back"
            style={{
              backgroundColor: "#642198",
            }}
          >
            Return
          </Button>,
        ]}
      ></Modal>
      <form className="hoa-form" onSubmit={submitHandler} ref={form} >
        <h3 className="hoa-pizzazz">Direct Email/Contact</h3>
        <h2>Chat with an ACM Agent today!</h2>
        <p>
          Please fill out all of the inputs below before hitting submit. We will
          be in contact with you as soon as possible.
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

<Input
          type="text"
          value={address}
          name="address"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
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
            name="zip"
            placeholder="Zip Code"
            onChange={(e) => setZip(e.target.value)}
            styleType="hoa-style-sm"
          />
        </div>
      
        {/* <Button styleType="hoa-proposal-button">SUBMIT</Button> */}
        {invalid === false && 
         <Button 
          type="primary"
          block
          onClick={submitHandler}
          style={{
            backgroundColor: "#1590ba", marginTop: "2rem", color: "white",
          }}
          >
            Submit
          </Button> }
        
        {invalid === true && 
         <Button 
         type="primary"
         block
         disabled
          style={{marginTop: "2rem", color: "white"}}
         >
           Submit
         </Button>
        
        
        
        }
      
      </form>
    </div>
  );
};

export default RealEstateForm;

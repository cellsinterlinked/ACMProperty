import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "../Reusable/Button";

const ContactForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(true);

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
    if (message.length < 2) {
      setInvalid(true);
      return;
    }
    setInvalid(!valid);
  }, [first, last, phone, invalid]);

  return (
    <div className="contact-form">
      <div className="contact-feature">
        <p>Direct Email/Contact</p>
      </div>
      <h2>Lets Talk!</h2>
      <p>
        Please fill out all of the following inputs, leaving none blank. We will
        get back with you as soon as possible!
      </p>

      <Input
        type="text"
        value={first}
        name="firstName"
        placeholder="First Name"
        onChange={(e) => setFirst(e.target.value)}
        styleType="contact-style"
      />
      <Input
        type="text"
        value={last}
        name="lastName"
        placeholder="Last Name"
        onChange={(e) => setLast(e.target.value)}
        styleType="contact-style"
      />
      <Input
        type="number"
        value={phone}
        name="phone"
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        styleType="contact-style"
      />
      <Input
        type="email"
        value={email}
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        styleType="contact-style"
      />
      <TextArea
        type="text"
        value={message}
        name="message"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        styleType="contact-area-style"
        rows={"6"}
      />
      <Button styleType="contact-submit-button" disabled={invalid}>
        {"Send Message"}
      </Button>
      {/* fix this stupid shit */}
    </div>
  );
};

export default ContactForm;

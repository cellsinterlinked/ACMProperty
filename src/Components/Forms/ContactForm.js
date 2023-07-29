import React, { useState, useEffect, useRef } from "react";
import "./ContactForm.css";
import Input from "./Input";
import TextArea from "./TextArea";
import emailjs from "@emailjs/browser";
// import Button from "../Reusable/Button";
import { Button, Modal } from "antd";

const ContactForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(true);
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
    if (message.length < 2) {
      setInvalid(true);
      return;
    }
    setInvalid(!valid);
  }, [first, last, phone, invalid, message.length, email.length]);

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_USER
      )
      .then((res) => {
        setFirst("");
        setLast("");
        setPhone("");
        setEmail("");
        setMessage("");
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
    <form className="contact-form" onSubmit={submitHandler} ref={form}>
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
        onOk={handleSuccessCancel}
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
      >
        <p>
       There was an error sending your message. Please try again later, or contact one of our agents directly!
        </p>
      </Modal>



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

      {invalid === false && 
         <Button 
          type="primary"
          block
          onClick={submitHandler}
          style={{
            backgroundColor: "#642198",
          }}
          >
            Submit
          </Button> }
        
        {invalid === true && 
         <Button 
         type="primary"
         block
         disabled
      
         >
           Submit
         </Button>
        
        
        
        }
      
    
      
   
    
    </form>
  );
};

export default ContactForm;

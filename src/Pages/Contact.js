import React from "react";
import "./Contact.css";
import NavBar from "../Components/Nav/Navbar";
import Footer from "../Components/Nav/Footer";
import ContactImage from "../Assets/Images/Contact Us.png";
import Chantz from "../Assets/Images/ChantzNew.e998dcf7.jpeg";
import Ashlee from "../Assets/Images/AshleeNew.6508e282.jpeg";
import ContactForm from "../Components/Forms/ContactForm";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact-wrapper">
        <div className="contact-header">
          <div className="contact-head-left">
            <h2>Contact Us.</h2>
            <p>
              Questions about renting a home, buying or selling a home, or
              hiring a property manager?
            </p>
            <br />
            <p>
              Don't hesistate to reach out to us. Whether we work together or
              simply provide you with information, we would be delighted to hear
              from you.
            </p>
          </div>
          <div className="contact-head-right">
            <div className="contact-image">
              <img alt="" src={ContactImage} />
            </div>
          </div>

          <div className="contact-bottom">
            <div className="contact-left">
              <div className="contact-1">
                <div className="contact-t">
                  <div className="contact-portrait">
                    <img alt="" src={Chantz} />
                  </div>
                  <h2>Chantz Morris</h2>
                </div>
                <div className="contact-b">
                  <p>812.592.7785</p>
                  <p>Chantz.Morris@talktotucker.com</p>
                  <p>License #:RB20001606</p>
                </div>
              </div>

              <div className="contact-1">
                <div className="contact-t">
                  <div className="contact-portrait">
                    <img alt="" src={Ashlee} />
                  </div>
                  <h2>Ashlee Morris</h2>
                </div>
                <div className="contact-b">
                  <p>812.592.0028</p>
                  <p>Ashlee.Morris@talktotucker.com</p>
                  <p>License #:RB21002818</p>
                </div>
              </div>
            </div>
            <div className="contact-right">
             <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

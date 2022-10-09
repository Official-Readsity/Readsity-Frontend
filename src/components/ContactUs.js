import React from "react";
import contactimg from "../assets/contactus.png";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section className="contactus">
      <div className="contactimg-wrapper">
        <img className="contactimg" src={contactimg} alt="" />
      </div>
      <div className="contactform-wrapper">
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <p>
            If you want more information about our services, please get in touch
            with us, using this form below.
          </p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Message" />
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

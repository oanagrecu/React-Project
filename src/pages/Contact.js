import React from "react";
// import Navbar from "../common/Navbar";
import FooterBottom from "../common/FooterBottom";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section className="contactSection">
        <div className="contactContainer">
          <h1>Get in Touch</h1>
          <h2>Send me a message using this form!</h2>
          <div className="row">
            <div className="col">
              <div className="input">
                <input type="text" name="Name" required />
                <span className="text">Name</span>
                <span className="line"></span>
              </div>
            </div>

            <div className="col">
              <div className="input">
                <input type="email" name="email" required />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="input">
                <textarea name="subject" required></textarea>
                <span className="text">Subject</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="input">
                <textarea name="message" required></textarea>
                <span className="text">Your Message</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button className="send-button" type="submit" value="Send">
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterBottom />
    </div>
  );
}

export default Contact;

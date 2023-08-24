import React from "react";
import ContactOneForm from "./ContactForm";
import './Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title" id="contactsub">Contact us</span>

            </div>
          </div>
        </div>

        <ContactOneForm />
      </div>
    </section>
  );
};

export default Contact;

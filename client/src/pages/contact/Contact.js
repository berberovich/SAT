import React from "react";
import ContactForm from "../../components/form/ContactForm";
import "./Contact.scss";
import ContactInfos from "../../components/ContactInfos";
function Contact() {
  return (
    <div className="contact">
      <h3>Let's Get in Touch</h3>
      <ContactForm />
      <ContactInfos />
    </div>
  );
}

export default Contact;

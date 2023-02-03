import React from "react";
import ContactForm from "../../components/form/ContactForm";
import "./Contact.scss";
import ContactInfos from "./ContactInfos";
function Contact() {
  return (
    <section className="contact section-width">
      <div className="contact-container flex justify-between">
        <ContactForm />
        <ContactInfos />
      </div>
    </section>
  );
}

export default Contact;

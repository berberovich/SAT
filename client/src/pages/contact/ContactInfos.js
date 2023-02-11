import React from "react";
import telephone from "../../assets/contact/telephone.png";
import location from "../../assets/contact/location (1).png";
import location2 from "../../assets/contact/352521_location_on_icon (1).svg";
import email from "../../assets/contact/email (1).png";
import facebook from "../../assets/contact/facebook.png";
import instagram from "../../assets/contact/instagram.png";
import whatsapp from "../../assets/contact/whatsapp.png";
import linkedin from "../../assets/contact/linkedin.png";
import { useTranslation } from "react-i18next";

function ContactInfos() {
  const { t } = useTranslation();
  return (
    <div className="contact-infos">
      <p>
        Feel free to ask any questions related to the course structure and
        anything else
      </p>
      <ul className="flex">
        <li>
          <a
            href="https://www.google.com/maps/place/13+Pavstos+Buzand+St,+Yerevan,+Armenia/@40.1806376,44.5074963,17z/data=!3m1!4b1!4m5!3m4!1s0x406abcfc6a7f5daf:0xf4769ed380912a9!8m2!3d40.1806335!4d44.509685"
            target="_blank"
            rel="noreferrer"
          >
            <img src={location2} alt="" />
          </a>
          <p>{t("contact.address")}</p>
        </li>
        <li>
          <a href="tel:+37494113934" rel="noreferrer" target="_blank">
            <img src={telephone} alt="" />
          </a>
          <p>+374 94 11 39 34</p>
        </li>
        <li>
          <a
            rel="noreferrer"
            href="https://www.google.com/maps/place/13+Pavstos+Buzand+St,+Yerevan,+Armenia/@40.1806376,44.5074963,17z/data=!3m1!4b1!4m5!3m4!1s0x406abcfc6a7f5daf:0xf4769ed380912a9!8m2!3d40.1806335!4d44.509685"
            target="_blank"
          >
            <img src={email} alt="" />
          </a>
          <p>garoberberian1@gmail.com</p>
        </li>
        <li>
          <div className="social-medias flex justify-center">
            <a
              href="https://www.facebook.com/archovichh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com/satmath__am"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://www.facebook.com/archovichh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="" />
            </a>
            <a
              href="https://www.facebook.com/archovichh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfos;

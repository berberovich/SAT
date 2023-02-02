import React from "react";
import telephone from "../../assets/contact/telephone.png";
import location from "../../assets/contact/location (1).png";
import email from "../../assets/contact/email (1).png";
import socialMedia from "../../assets/contact/social-media (1).png";

function ContactInfos() {
  return (
    <div className="contact-infos">
      <ul className="flex ">
        <li>
          <a
            href="https://www.google.com/maps/place/13+Pavstos+Buzand+St,+Yerevan,+Armenia/@40.1806376,44.5074963,17z/data=!3m1!4b1!4m5!3m4!1s0x406abcfc6a7f5daf:0xf4769ed380912a9!8m2!3d40.1806335!4d44.509685"
            target="_blank"
          >
            <img src={location} alt="" />
          </a>
          <p>Pavstos Buzand 13, apt. 100</p>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/13+Pavstos+Buzand+St,+Yerevan,+Armenia/@40.1806376,44.5074963,17z/data=!3m1!4b1!4m5!3m4!1s0x406abcfc6a7f5daf:0xf4769ed380912a9!8m2!3d40.1806335!4d44.509685"
            target="_blank"
          >
            <img src={telephone} alt="" />
          </a>
          <p>+374 94 11 39 34</p>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/13+Pavstos+Buzand+St,+Yerevan,+Armenia/@40.1806376,44.5074963,17z/data=!3m1!4b1!4m5!3m4!1s0x406abcfc6a7f5daf:0xf4769ed380912a9!8m2!3d40.1806335!4d44.509685"
            target="_blank"
          >
            <img src={email} alt="" />
          </a>
          <p>garoberberian1@gmail.com</p>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/13+Pavstos+Buzand+St,+Yerevan,+Armenia/@40.1806376,44.5074963,17z/data=!3m1!4b1!4m5!3m4!1s0x406abcfc6a7f5daf:0xf4769ed380912a9!8m2!3d40.1806335!4d44.509685"
            target="_blank"
          >
            <img src={socialMedia} alt="" />
          </a>
          <p>Pavstos Buzand 13, apt. 100</p>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfos;

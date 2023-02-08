import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="flex justify-around">
      <ul>
        <li>
          <Link to="" className="x">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="courses">Courses</Link>
        </li>
        <li>
          {" "}
          <Link to="about"> About me</Link>
        </li>
        <li>
          {" "}
          <Link to="contact"> Contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          <a href="https://www.facebook.com" target={"_blank"} rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/satmath__am"
            target={"_blank"}
            rel="noreferer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target={"_blank"} rel="noreferrer">
            linkedin
          </a>
        </li>{" "}
        <li>
          <a href="https://www.linkedin.com" target={"_blank"} rel="noreferrer">
            whatsapp
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

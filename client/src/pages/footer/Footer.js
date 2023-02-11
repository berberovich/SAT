import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex justify-around">
      <ul>
        <li>
          <Link to="" className="x">
            {t("navbar.Home")}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="courses">{t("navbar.Courses")}</Link>
        </li>
        <li>
          {" "}
          <Link to="about"> {t("navbar.About me")}</Link>
        </li>
        <li>
          {" "}
          <Link to="contact"> {t("navbar.Contact")}</Link>
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

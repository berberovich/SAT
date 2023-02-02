import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import i18next from "i18next";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

function Navbar() {
  const { t } = useTranslation();
  const [dataVisible, setDataVisible] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [language, setLanguage] = useState("en");
  const currentLanguage = cookies.get("i18next");
  const handleNavBtnClick = (e) => {
    setAriaExpanded(!ariaExpanded);
    setDataVisible(!dataVisible);
  };
  const handleLanguageChange = ({ target }) => {
    const { value } = target;
    setLanguage(value);
    console.log(window.location.pathname);

    i18next.changeLanguage(value);
  };
  const closeMobileNavbar = () => {
    setAriaExpanded(false);
    setDataVisible(false);
  };
  return (
    <header className="header flex justify-between items-center ">
      <div className="brand-name">
        <Link to="">SAT MATH</Link>
      </div>
      <button
        aria-expanded={ariaExpanded}
        className="mobile-nav-toggle flex justify-center items-center"
        onClick={handleNavBtnClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="flex items-center">
        <ul className="navbar flex" data-visible={dataVisible}>
          <li className="nav-item">
            <NavLink to="" className="nav-link" onClick={closeMobileNavbar}>
              {t("navbar.Home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="courses"
              className="nav-link"
              onClick={closeMobileNavbar}
            >
              {t("navbar.Courses")}
            </NavLink>
          </li>{" "}
          <li className="nav-item">
            <NavLink
              to="about"
              className="nav-link"
              onClick={closeMobileNavbar}
            >
              {t("navbar.About me")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className="nav-link"
              onClick={closeMobileNavbar}
            >
              {t("navbar.Contact")}
            </NavLink>
          </li>
        </ul>
        <div className="languages">
          <FormControl sx={{ m: 1 }} variant="standard">
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={language}
              defaultValue={language}
              onChange={handleLanguageChange}
            >
              <MenuItem value={"en"} disabled={currentLanguage === "en"}>
                en
              </MenuItem>
              <MenuItem value={"am"} disabled={currentLanguage === "am"}>
                հայ
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import i18next from "i18next";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { t } = useTranslation();
  const [dataVisible, setDataVisible] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [language, setLanguage] = useState("en");
  const handleNavBtnClick = (e) => {
    setAriaExpanded(!ariaExpanded);
    setDataVisible(!dataVisible);
  };
  const handleLanguageChange = ({ target }) => {
    const { value } = target;
    setLanguage(value);
    i18next.changeLanguage(value);
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
            <NavLink to="" className="nav-link">
              {t("Home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="courses" className="nav-link">
              {t("Courses")}
            </NavLink>
          </li>{" "}
          <li className="nav-item">
            <NavLink to="about" className="nav-link">
              {t("About me")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact" className="nav-link">
              {t("Contact")}
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
              <MenuItem value={"en"}>en</MenuItem>
              <MenuItem value={"am"}>հայ</MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

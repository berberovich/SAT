import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import i18next from "i18next";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import useClickOutside from "../../hooks/useClickOutside";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { t } = useTranslation();
  const Moon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
    </svg>
  );

  const Sun = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1z" />
    </svg>
  );

  const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    );
  };
  const [dataVisible, setDataVisible] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [language, setLanguage] = useState("en");
  const currentLanguage = cookies.get("i18next");
  const ref = useClickOutside(() => {
    setDataVisible(false);
    setAriaExpanded(false);
  });

  const handleNavBtnClick = (e) => {
    setAriaExpanded(!ariaExpanded);
    setDataVisible(!dataVisible);
  };
  const handleLanguageChange = ({ target }) => {
    const { value } = target;
    setLanguage(value);

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
      <nav className="flex items-center" ref={ref}>
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
          <li className="language-selection-in-mobile-nav">
            <span
              onClick={() => {
                handleLanguageChange({ target: { value: "en" } });
              }}
              className={`language-in-mobile-nav ${
                currentLanguage === "en" && "active-lang"
              }`}
            >
              en
            </span>{" "}
            /{" "}
            <span
              onClick={() => {
                handleLanguageChange({ target: { value: "am" } });
              }}
              className={`language-in-mobile-nav ${
                currentLanguage === "am" && "active-lang"
              }`}
            >
              arm
            </span>
          </li>
          <li className="theme-toggle-in-mobile-nav">
            <div className="theme-toggle-box-in-mobile-nav">
              {ThemeToggle()}
            </div>
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
        <div className="theme-toggle-box">{ThemeToggle()}</div>
      </nav>
    </header>
  );
}

export default Navbar;

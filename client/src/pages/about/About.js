import React from "react";
import { useTranslation } from "react-i18next";
import myPicture from "../../assets/mypicture/cutebeing.png";
import "./About.scss";
function About() {
  const { t } = useTranslation();
  return (
    <div className="about flex justify-around">
      <p>{t("about.paragraphAboutMe")}</p>
      <div className="about__image">
        <img src={myPicture} alt="" />
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { useTranslation } from "react-i18next";
import myPicture from "../../assets/mypicture/cutebeing.png";
import "./About.scss";
import babyBoy from "../../assets/about/baby.png";
import syria from "../../assets/about/syria.png";
import armenia from "../../assets/about/armenia.png";
import graduationHat from "../../assets/about/graduation-hat.png";
import maleTeacher from "../../assets/about/male-teacher.png";
import wave from "../../assets/about/wave.png";

function About() {
  const { t } = useTranslation();
  return (
    <div className="about flex justify-around">
      <div className="about__content">
        <p>{t("about.paragraphAboutMe")}</p>
        <ul>
          {" "}
          <li>
            <b>2019-present</b>
            <div className="flex items-center">
              <img src={maleTeacher} alt="" />
              <p>{t("about.profession")}</p>
            </div>
          </li>{" "}
          <li>
            <b>2015-2019</b>{" "}
            <div className="flex items-center">
              <img src={graduationHat} alt="" />
              <p>{t("about.graduation")}</p>
            </div>
          </li>{" "}
          <li>
            <b>2012</b>
            <div className="flex items-center">
              <p>{t("about.resettle")}</p>
              <img src={armenia} alt="" />
            </div>
          </li>
          <li>
            <b>1995</b>
            <div className="flex items-center">
              <img src={babyBoy} alt="" />
              <p>{t("about.birthPlace")}</p>
              <img src={syria} alt="" />
            </div>
          </li>{" "}
        </ul>
      </div>
      <div className="about__image">
        <img src={myPicture} alt="" />
      </div>
    </div>
  );
}

export default About;

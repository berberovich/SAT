import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openDialog } from "../../redux/features/dialog/dialogSlice";

function Course({ courseDetails }) {
  const { t } = useTranslation();
  const {
    courseName,
    duration,
    price,
    level,
    courseFormat,
    commitment,
    moreDetails,
  } = courseDetails;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openDialog({ title: moreDetails }));
  };
  return (
    <>
      <ul className="course-container">
        <li>{courseName}</li>
        <li>
          <span className="">{t("courses.level")}:</span> <span>{level}</span>
        </li>
        <li>
          {" "}
          <span>{t("courses.duration")}:</span> <span>{duration}</span>
        </li>{" "}
        <li>
          {" "}
          <span> {t("courses.format")}:</span> <span>{courseFormat}</span>
        </li>{" "}
        <li>
          <span>{t("courses.commitment")}: </span> <span> {commitment}</span>
        </li>{" "}
        <li>
          <span>{t("courses.price")}: </span> <span> {price}</span>
        </li>{" "}
        <div className="btn-container">
          <button className="btn" onClick={handleClick}>
            {t("courses.learnMore")}
          </button>
        </div>
      </ul>
    </>
  );
}

export default Course;

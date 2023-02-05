import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openDialog } from "../../redux/features/dialog/dialogSlice";

function Course({ courseDetails }) {
  const {
    courseName,
    duration,
    price,
    level,
    session,
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
          <span className="">Level:</span> <span>{level}</span>
        </li>
        <li>
          {" "}
          <span>Duration:</span> <span>{duration}</span>
        </li>{" "}
        <li>
          {" "}
          <span> Session:</span> <span>{session}</span>
        </li>{" "}
        <li>
          <span>Commitment: </span> <span> {commitment}</span>
        </li>{" "}
        <li>
          <span>Price: </span> <span> {price}</span>
        </li>{" "}
        <div className="btn-container">
          <Button variant="contained" size="large" onClick={handleClick}>
            learn more
          </Button>
        </div>
      </ul>
    </>
  );
}

export default Course;

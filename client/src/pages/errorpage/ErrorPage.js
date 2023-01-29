import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";
function ErrorPage() {
  const navigate = useNavigate("");
  const handleBtnClick = () => {
    navigate("");
  };
  return (
    <div className="errorpage-container">
      <h1>PAGE NOT FOUND</h1>
      <p>Sorry, the page you're looking for doesn't exist. </p>
      <Button variant="contained" size="large" onClick={handleBtnClick}>
        HOME
      </Button>
    </div>
  );
}

export default ErrorPage;

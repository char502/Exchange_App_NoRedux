import React from "react";
import "../components/css/title.css";

const Title = props => (
  <div className="main-title">
    <h1>{props.title}</h1>
  </div>
);

Title.defaultProps = {
  title: "Exchange Rates App"
};

export default Title;

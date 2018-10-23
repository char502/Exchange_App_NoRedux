import React from "react";

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

Title.defaultProps = {
  title: "Exchange Rates App"
};

export default Title;

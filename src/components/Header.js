import React from "react";
import Title from "./Title";
import Clock from "./Clock";
import RequestExchange from "./RequestExchange";
// import "../components/css/mainDiv.css";
// import "../components/css/headerDiv.css";
import Navbar from "./Navbar";
import "../components/css/base.css";

const Header = props => (
  <div>
    <Navbar />
    <div className="mainDiv">
      <div className="headerDiv">
        <Title title={props.title} />
        <Clock />
      </div>
      <div>
        <RequestExchange />
      </div>
    </div>
  </div>
);

export default Header;

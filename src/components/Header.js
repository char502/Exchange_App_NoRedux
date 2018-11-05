import React from "react";
import Title from "./Title";
import Clock from "./Clock";
import RequestExchange from "./RequestExchange";
import ConvertExchange from "./ConvertExchange";
import Footer from "./footer";
// import "../components/css/mainDiv.css";
// import "../components/css/headerDiv.css";
// import Navbar from "./Navbar";
import "../components/css/base.css";

const Header = props => (
  <div>
    {/* <Navbar /> */}
    <div className="container">
      <div className="headerDiv">
        {/* <hr /> */}
        <hr />
        <Title title={props.title} />
        <Clock />
      </div>
      <div className="sideBySide">
        <div className="col1">
          <RequestExchange />
        </div>
        <div className="col2">
          <ConvertExchange />
        </div>
      </div>
    </div>
    <div className="footer">
      <Footer footerText={props.footerText} />
    </div>
  </div>
);

export default Header;

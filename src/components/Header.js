import React from "react";
import Title from "./Title";
import Clock from "./Clock";
import RequestExchange from "./RatesApp";
import ConvertExchange from "./ConvertExchangeRates";
import Footer from "./footer";
// import "../components/css/mainDiv.css";
// import "../components/css/headerDiv.css";
// import Navbar from "./Navbar";
import "../components/css/base.css";
// import TestComponent from "./TestComponent";

const Header = props => (
  <div>
    <div className="container">
      <div className="headerDiv">
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
    {/* <div>
      <TestComponent />
    </div> */}
    <div className="footer">
      <Footer footerText={props.footerText} />
    </div>
  </div>
);

export default Header;

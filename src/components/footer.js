import React from "react";

const Footer = props => {
  return (
    <div>
      <p>
        {"\u00A9"} {props.footerText} {"\u00A9"}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  footerText: "Charlotte Ellwood 2018"
};

export default Footer;

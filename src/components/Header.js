import React from "react";
import Title from "./Title";
import Clock from "./Clock";
import RequestExchange from "./RequestExchange";

const Header = props => (
  <div>
    <Title title={props.title} />
    <Clock />
    <RequestExchange />
  </div>
);

export default Header;

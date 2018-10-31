import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./index.css";
import ColDiv from "./components/pageDivLayout/colDivs";

// const element = <h1>Hello</h1>;
// console.log(element);

// ReactDOM.render(element, document.getElementById("root"));

// function Clock(props) {
//   return (
//     <div>
//       <h1>Exchange Rates App</h1>
//       <h2>
//         It is {props.date.toLocaleTimeString()} on{" "}
//         {props.date.toLocaleDateString("en-GB")}.
//       </h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// The setInterval() method repeats a given function at every given time-interval.

// In react would be better to use state but this just shows a setInterval example

// const App = () => <ColDiv />;

ReactDOM.render(<Header />, document.getElementById("root"));

import React from "react";
// import ReactDOM from "react-dom";
// import "../components/css/header.css";

// let date = new Date().toLocaleDateString("en-GB");
// import "../components/css/timeDate.css";
import "../components/css/base.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString("en-GB")
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div className="timeDateDependents">
        <p>Time: {this.state.time}</p>
        <p>Date: {this.state.date}</p>
        {/* <hr /> */}
        <hr />
      </div>
    );
  }
}
export default Clock;

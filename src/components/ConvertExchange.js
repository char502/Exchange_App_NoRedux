import React from "react";

const styles = {
  textAlign: "center",
  fontSize: 26,
  // fontWeight: "bold",
  color: "white"
};

class ConvertExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <hr />
        <p style={styles}>Convert Exchange Rate</p>
        <hr />
      </div>
    );
  }
}

export default ConvertExchange;

// class  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (  );
//     }
// }

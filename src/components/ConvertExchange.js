import React from "react";

const styles = {
  textAlign: "center",
  fontSize: 30,
  fontWeight: "bold",
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
        <p style={styles}>Convert Exchange Rate</p>
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

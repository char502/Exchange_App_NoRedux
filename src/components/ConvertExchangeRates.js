import React from "react";
import { FetchProfile } from "./ApiCall";

// use props to bring in exchange rates?

// Converted Amount = Amount you want to convert / rateFrom * rateTo
class ConvertExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      value: "GBP"
    };
  }
  componentDidMount() {
    FetchProfile().then(data =>
      this.setState({
        isLoaded: true,
        items: data
      })
    );
  }
  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded || !items.rates) {
      return <div>Loading...</div>;
    }

    console.log(items.rates);

    return (
      <div>
        <hr />
        <p className="titleStyles">Convert Exchange Rate</p>
        <hr />
        <p>The current base rate is {items.base}</p>
        <p>Please Enter Currency you wish to convert</p>
        Currency From: <br />
        <input type="text" name="amount" />
        <label>
          <select name="currencyFrom">
            <option>GBP</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label>
        <br />
        <br />
        Currency To: <br />
        <input type="text" name="from" />
        <label>
          <select name="currencyTo">
            <option>GBP</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label>
        {/* <br />
          Result: <br />
          <input type="text" name="from" />
          <br />
          <br />
          <br /> */}
        {/* <p>Sample: 1 GBP equals 0.051 Euro</p> */}
      </div>
    );
  }
}

export default ConvertExchange;

// const ConvertExchange = props => {
//   console.log(props);
//   const ({})
//   return (
//     <div>
//       {/* <p>My data is: {this.state.convert}</p> */}
//       <p>the property is: {props.isLoaded}</p>
//     </div>
//   );
// };

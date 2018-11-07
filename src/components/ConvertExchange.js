import React from "react";
// import RequestExchange from "./RequestExchange";
import { fetchProfile } from "./ApiCall";

const styles = {
  textAlign: "center",
  fontSize: 22,
  // fontWeight: "bold",
  color: "white"
};

// basic url - "http://data.fixer.io/api/latest?access_key=ff94c304d79ade79928ce736041bfd70";

// 89fac498af054bb509e04769e6312f6b

// ("http://data.fixer.io/api/convert?access_key=ff94c304d79ade79928ce736041bfd70&from=GBP&to=JPY&amount=25");

// const convertUrl =
//   "https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP,PHP_USD";

// https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP,PHP_USD

class ConvertExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hasLoaded: false,
      value: "GBP"
    };
  }

  componentDidMount() {
    fetchProfile()
      // const apiUrl = "https://api.exchangeratesapi.io/latest?base=GBP";
      // fetch(apiUrl)
      //   .then(response => response.json())
      .then(data =>
        this.setState({
          hasLoaded: true,
          items: data
        })
      );
  }

  render() {
    const { hasLoaded, items } = this.state;

    if (!hasLoaded || !items.rates) {
      return <div>Loading...</div>;
    }

    console.log(items.rates);

    return (
      <div>
        <hr />
        <p style={styles}>Convert Exchange Rate</p>
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

// return (
//   <div>
//     <p>My data is: {this.state.convert}</p>
//     <p>the property is: {this.isLoaded}</p>
//   </div>
// );

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

//   render() {
//     console.log(this.props.isLoaded);
//     // let { isLoaded } = this.props;
//     return (
//       <div>
//         <div>My mobile is: {this.props.isLoaded}</div>
//       </div>
//     );
//   }
// }

// use props to bring in exchange rates?

// componentDidMount() {
//   fetch(convertUrl)
//     .then(response => response.json())
//     .then(otherData =>
//       this.setState({
//         isLoaded: true,
//         convert: otherData
//       })
//     );
// }

// render() {
// const { isLoaded, items } = this.state;
// const { isLoaded, convert } = this.state;

// const { isLoaded } = this.props;

// if (!isLoaded) {
//   return <div>Loading...</div>;
// }
// const { isLoaded } = props;

// console.log(isLoaded);

// Converted Amount = Amount you want to convert / rateFrom * rateTo

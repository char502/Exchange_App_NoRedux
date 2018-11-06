import React from "react";
// import RequestExchange from "./RequestExchange";

const styles = {
  textAlign: "center",
  fontSize: 26,
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
      convert: [],
      isLoaded: false
    };
  }

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

  render() {
    // const { isLoaded, items } = this.state;
    // const { isLoaded, convert } = this.state;

    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // }

    // console.log(convert);

    // Converted Amount = Amount you want to convert / rateFrom * rateTo

    return (
      <div>
        <hr />
        <p style={styles}>Convert Exchange Rate</p>
        <hr />
        <p>Please Enter Currency you wish to convert</p>
        Currency From: <br />
        <input type="text" name="amount" />
        <label>
          <select name="currency">
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
          <select name="currency">
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
        <p>Sample: 1 GBP equals 0.051 Euro</p>
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

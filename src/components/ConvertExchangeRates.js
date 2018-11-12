import React from "react";
// import { FetchProfile } from "./ApiCall";

class ConvertExchangeRates extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //     value: "GBP"
  //   };
  // }
  // componentDidMount() {
  //   FetchProfile().then(data =>
  //     this.setState({
  //       isLoaded: true,
  //       items: data
  //     })
  //   );
  // }
  render() {
    // const { isLoaded, items } = this.state;

    // if (!isLoaded || !items.rates) {
    //   return <div>Loading...</div>;
    // }

    // console.log(items.rates);

    // console.log(this.props);

    // Converted Amount = Amount you want to convert / rateFrom * rateTo

    return (
      <div>
        <hr />
        <p className="titleStyles">Convert Exchange Rate</p>
        <hr />
        <p>1. Enter amount</p>
        <p>2. Choose start/end currencies</p>
        <p>3. Click convert for result</p>
        <form className="formConvert" onSubmit={this.props.handleConversion}>
          <div>
            <label>Amount: </label>
            <input
              type="number"
              id="amount"
              placeholder="1"
              step="0.01"
              value={this.props.amount}
              onChange={this.props.handleAmountChange}
            />
            {console.log(this.props.amount)}
          </div>
          <div>
            <label>from: </label>
            <select
              startcurrency={this.props.startcurrency}
              onChange={this.props.handleFromDropdownOne}
            >
              {this.props.newRatesArray.map((rates) => (
                <option key={rates.value} value={rates.value}>
                  {rates.display}{" "}
                </option>
              ))}
            </select>
          </div>
          {/* <p>Test: The from {this.props.value}</p> */}
          <div>
            <label>to: </label>
            <select
              endcurrency={this.props.endcurrency}
              onChange={this.props.handleFromDropdownTwo}
            >
              {this.props.newRatesArray.map((rates) => (
                <option key={rates.value} value={rates.value}>
                  {rates.display}{" "}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Convert" />
          {/* <div className="button">
            <button type="submit" onSubmit={this.props.handleConversion}>Convert</button>
          </div> */}
          <p>
            {this.props.amount} {this.props.startcurrency} is equal to{" "}
            {this.props.result} {this.props.endcurrency}
          </p>
        </form>
        <br />
        <br />
        <p>Test: The current base rate is - {this.props.base}</p>
        <p>Sample: 1 GBP equals 0.051 Euro</p>
        {/* items={this.state.items}
        base={this.state.items.base}
        rates={this.state.items.rates}
        value={this.state.value}
        ratesArray={ratesKeys}
        result={this.state.result}
        startCurrency={this.state.StartCurrency}
        endCurrency={this.state.EndCurrency}
        amount={this.state.amount} */}
        {/* Currency To:
        <br />
        <br />
        <input type="text" name="from" />
        <label>
          <select name="currencyTo">
            <option>GBP</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label> */}
        {/* <br />
          Result: <br />
          <input type="text" name="from" />
          <br />
          <br />
          <br /> */}
      </div>
    );
  }
}

export default ConvertExchangeRates;

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

import React from "react";
// import { FetchProfile } from "./ApiCall";

class ConvertExchangeRates extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    onSubmitClicked: false
  };
  //   // this.handleConversion = this.handleConversion.bind(this);
  // }
  // componentDidMount() {
  //   FetchProfile().then(data =>
  //     this.setState({
  //       isLoaded: true,
  //       items: data
  //     })
  //   );
  // }

  handleConversion = (event) => {
    event.preventDefault();
    const onSubmitClicked = this.props.handleConversion;
    console.log(this.state.onSubmitClicked);
    if (onSubmitClicked === true) {
      this.setState(() => ({ onSubmitClicked: true }));
    }
    console.log(this.state.onSubmitClicked);
  };

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
              value={this.props.startcurrency}
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
              value={this.props.endcurrency}
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
            {/* {this.handleConversion()} */}
            {this.props.result}{" "}
            {/* {this.state.onSubmitClicked === true
              ? this.props.result
              : null}{" "} */}
            {this.props.endcurrency}
          </p>
        </form>
        <br />
        <br />
        <p>Test: The current base rate is - {this.props.startcurrency}</p>
      </div>
    );
  }
}

export default ConvertExchangeRates;

import React from "react";
// import { FetchProfile } from "./ApiCall";

class ConvertExchangeRates extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     onSubmitClicked: false
  //   };
  //   this.handleConversion = this.handleConversion.bind(this);
  // }
  // componentDidMount() {
  //   FetchProfile().then(data =>
  //     this.setState({
  //       isLoaded: true,
  //       items: data
  //     })
  //   );
  // }

  // handleConversion = (event) => {
  //   event.preventDefault();
  //   const onSubmitClicked = this.props.handleConversion;
  //   console.log(this.state.onSubmitClicked);
  //   if (onSubmitClicked === true) {
  //     this.setState((prevState) => ({
  //       onSubmitClicked: true
  //     }));
  //   }
  //   console.log(this.state.onSubmitClicked);
  // };

  render() {
    // const { isLoaded, items } = this.props;
    // console.log(this.props.defValue);

    // console.log(this.props.result);
    return (
      <div>
        <hr />
        <p className="titleStyles">Convert Exchange Rate</p>
        <hr />
        <p>1. Enter amount</p>
        <p>2. Choose start/end currencies</p>
        <p>
          3. Click{" "}
          <span style={{ color: "red", textDecoration: "underline" }}>
            CONVERT
          </span>{" "}
          for result
        </p>
        <form onSubmit={this.props.handleConversion}>
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
            {/* {console.log(this.props.amount)} */}
          </div>
          <div>
            <label className="formLabel">from: </label>
            <select
              name="start"
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
            <label className="formLabel">to: </label>
            <select
              name="end"
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
          <input className="convertButton" type="submit" value="Convert" />
          <p className="convertResult">
            {this.props.amount} {this.props.startcurrency} is equal to{" "}
            {this.props.result ? this.props.result : this.props.defValue}{" "}
            {this.props.endcurrency}
          </p>
        </form>
      </div>
    );
  }
}

export default ConvertExchangeRates;

// this.props.rates.USD.toFixed(2)

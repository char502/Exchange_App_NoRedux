import React from "react";
import { FetchProfile } from "./ApiCall";
import RequestExchangeRate from "./RequestExchangeRate";
import ConvertExchangeRates from "./ConvertExchangeRates";
import Title from "./Title";
import Clock from "./Clock";
import Footer from "./footer";

// CSS
import "../components/css/base.css";

class ExchangeRatesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      value: "GBP",
      result: null,
      startcurrency: "GBP",
      endcurrency: "USD",
      amount: 1,
      defValue: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFromDropdown = this.handleFromDropdown.bind(this);
    this.handleConversion = this.handleConversion.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }
  // setting the retrieved data to state
  componentDidMount() {
    FetchProfile().then((data) => {
      const defValue = data.rates.USD;
      // console.log(defValue);
      this.setState((prevState) => ({
        isLoaded: true,
        defValue: defValue.toFixed(2),
        items: data
      }));
    });
  }
  // for submit col 1
  handleSubmit = (event) => {
    event.preventDefault();
    const base = this.state.value;
    // console.log(typeof base);
    const basicUrl = "https://api.exchangeratesapi.io/latest?";
    if (base === "EUR") {
      return fetch(basicUrl)
        .then((res) => res.json())
        .then((data) => {
          // {
          // const currencyAdd = ["EUR"];
          // for (const key in data.rates) {
          //   currencyAdd.push(key)
          // }
          this.setState((prevState) => ({
            items: data,
            value: base
          }));
          // console.log(this.state.items);
          // }
          // if (ratesKeys) {
          // ratesKeys.push('EUR')
          // } // condition to check if EUR present, if not array.push it to array
        });
    } else {
      return fetch(basicUrl + "base=" + base)
        .then((res) => res.json())
        .then((data) => {
          this.setState((prevState) => ({
            items: data,
            value: base
          }));
        });
    }
  };

  // dropdown change col1
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    // console.log(this.state.value);
  };

  // when adding a new amount in col 2
  handleAmountChange = (event) => {
    event.preventDefault();
    this.setState({
      amount: event.target.value
    });
    // console.log(this.state.value);
  };

  // dropdown change handler col 2
  handleFromDropdown = (event) => {
    event.preventDefault();
    if (event.target.name === "start") {
      this.setState({
        startcurrency: event.target.value
      });
    }
    if (event.target.name === "end") {
      this.setState({
        endcurrency: event.target.value
      });
    }
  };

  // conversion change handler col 2
  handleConversion = (event) => {
    event.preventDefault();

    const basicUrl = "https://api.exchangeratesapi.io/latest?";
    const baseCurrencyFrom = this.state.startcurrency;
    const convertCurrencyTo = this.state.endcurrency;
    // const combo =
    //   basicUrl + "base=" + baseCurrencyFrom + "&symbols=" + convertCurrencyTo;
    // console.log(combo);

    fetch(
      basicUrl + "base=" + baseCurrencyFrom + "&symbols=" + convertCurrencyTo
    )
      .then((res) => res.json())
      .then((res) => {
        const rateValue = res.rates[convertCurrencyTo];
        // Note: using [convertCurrencyTo] as this is how to access
        // the key's value in the key/value pair that was returned
        const convResult = this.state.amount * rateValue;
        this.setState((prevState) => ({
          result: convResult.toFixed(2)
        }));
      });

    // console.log(this.state.result);

    // console.log(this.state.items)
    // conv = this.state.amount * convFetchRes.key.value

    // console.log(this.state.convFetchRes.rates);
    // console.log(this.state.convFetchRes.base);
    // console.log("this is the handleConversion handler");
    // console.log(`amount is ${this.state.amount}, start is ${this.state.startcurrency} and end is ${this.state.endcurrency}`);
  };

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded || !items.rates) {
      return <div>Loading...</div>;
    }

    let ratesKeys = Object.keys(items.rates)
      .sort()
      .map((rates) => {
        return {
          value: rates,
          display: rates
        };
      });

    // const sortedRates = ratesKeys.sort();
    // console.log(sortedRates);
    // console.log(ratesKeys);
    // console.log(this.state.items.base);
    // console.log(this.state.items.rates);

    return (
      <div>
        <div className="container">
          <div className="headerDiv">
            <hr />
            <Title title={this.props.title} />
            <Clock />
          </div>
          <div className="sideBySide">
            <div className="col1">
              <RequestExchangeRate
                items={this.state.items}
                base={this.state.items.base}
                rates={this.state.items.rates}
                value={this.state.value}
                newRatesArray={ratesKeys}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </div>
            <div className="col2">
              <ConvertExchangeRates
                items={this.state.items}
                base={this.state.items.base}
                rates={this.state.items.rates}
                value={this.state.value}
                newRatesArray={ratesKeys}
                result={this.state.result}
                startcurrency={this.state.startcurrency}
                endcurrency={this.state.endcurrency}
                amount={this.state.amount}
                handleAmountChange={this.handleAmountChange}
                handleFromDropdown={this.handleFromDropdown}
                handleConversion={this.handleConversion}
                convFetchRes={this.state.convFetchRes}
                defValue={this.state.defValue}
              />
            </div>
          </div>
        </div>
        {/* <div>
          <TestComponent />
        </div> */}
        <div className="footer">
          <Footer footerText={this.props.footerText} />
        </div>
      </div>
    );
  }
}

export default ExchangeRatesApp;

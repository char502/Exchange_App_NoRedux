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
      StartCurrency: "GBP",
      EndCurrency: "USD",
      amount: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleDropdown = this.handleDropdown.bind(this);
    // this.handleConversion = this.handleConversion.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  componentDidMount() {
    FetchProfile().then(data =>
      this.setState({
        isLoaded: true,
        items: data
      })
    );
  }
  // for submit col 1
  handleSubmit = event => {
    event.preventDefault();
    const base = this.state.value;
    // console.log(typeof base);
    const basicUrl = "https://api.exchangeratesapi.io/latest?";
    if (base === "EUR") {
      return fetch(basicUrl)
        .then(res => res.json())
        .then(
          data =>
            // {
            // const currencyAdd = ["EUR"];
            // for (const key in data.rates) {
            //   currencyAdd.push(key);
            // }

            this.setState({
              items: data,
              value: base
            })
          // }
          // if (ratesKeys) {
          // ratesKeys.push('EUR')
          // } // condition to check if EUR present, if not array.push it to array
        );
    } else {
      return fetch(basicUrl + "base=" + base)
        .then(res => res.json())
        .then(data =>
          this.setState({
            items: data,
            value: base
          })
        );
    }
  };
  // dropdown change col1
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    // console.log(this.state.value);
  };

  handleAmountChange = event => {
    event.preventDefault();
    this.setState({
      amount: event.target.value
    });
  };
  // console.log(this.state.value);

  // dropdown change handler col 2
  // handleDropdown = () => {
  //   console.log('this is the handleDropdown handler')
  // }

  // conversion change handler col 2
  // handleConversion = () => {
  //   console.log("this is the handleConversion handler");
  // }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded || !items.rates) {
      return <div>Loading...</div>;
    }

    let ratesKeys = Object.keys(items.rates).map(rates => {
      return {
        value: rates,
        display: rates
      };
    });

    // const sortedRates = ratesKeys.sort();
    // console.log(sortedRates);
    // console.log(ratesKeys);
    // console.log(this.state.items.base);

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
                startCurrency={this.state.StartCurrency}
                endCurrency={this.state.EndCurrency}
                amount={this.state.amount}
                handleAmountChange={this.handleAmountChange}
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

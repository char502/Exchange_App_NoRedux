import React from "react";
// import ApiResults from "./ApiResults";

const apiUrl = "https://api.exchangeratesapi.io/latest?base=GBP";

// http://data.fixer.io/api/latest?access_key=ff94c304d79ade79928ce736041bfd70

// Alternative - 'https://api.exchangeratesapi.io/latest?base=GBP' - rates are from European cantral bank
// website - https://exchangeratesapi.io/

// Append to end of apiURL to limit returns - '& symbols=GBP, USD, CAD, JPY'

class RequestExchange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      value: "GBP"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoaded: true,
          items: data
        })
      );
  }
  // componentDidUpdate(prevProps, prevState) {}

  // componentDidUpdate = prevState => {
  //   // let newVal =
  //   //   "https://api.exchangeratesapi.io/latest?base=" + this.state.value;
  //   if (prevState.value !== this.state.value) {
  //     console.log(this.state.value);
  //     // this.setState({
  //     //   items: this.state.value
  //     // });
  //   }
  // };

  handleSubmit(event) {
    console.log(`your choice is ${this.state.value}`);
    event.preventDefault();
    const base = this.state.value;
    console.log(base);
    fetch(`https://api.exchangeratesapi.io/latest?${base}`)
      .then(res => res.json())
      .then(res => console.log(res));
    console.log(this.state.items);
  }
  handleChange(event) {
    // let newVal =
    //   "https://api.exchangeratesapi.io/latest?base=" + event.target.value;
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value);
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded || !items.rates) {
      return <div>Loading...</div>;
    }
    // console.log(items);

    // let value = Object.keys(items.rates);
    // console.log(typeof value[0]);
    // console.log(this.state.items.rates);

    // onChange = { this.handleChange }
    // set either`onChange` or`readOnly`.

    // console.log(blob);
    // console.log(Object.keys(items.rates));

    let ratesKeys = Object.keys(items.rates).map(rates => {
      return {
        value: rates,
        display: rates
      };
    });
    // console.log(ratesKeys);
    return (
      <div>
        <p>Please Select Base Rate: </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              {ratesKeys.map(rates => (
                <option key={rates.value} value={rates.value}>
                  {rates.display}
                </option>
              ))}
              {/* <option value="BGN">GBP</option>
              <option value="BGN">BGN</option>
              <option value="CAD">CAD</option>
              <option value="BRL">BRL</option> */}
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        <p> Rates: (Base rate is {this.state.value})</p>
        <ul>
          {Object.keys(items.rates).map((key, index) => (
            <li key={index}>
              {key}: {Number(items.rates[key]).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RequestExchange;

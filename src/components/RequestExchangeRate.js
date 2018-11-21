import React from "react";

class RequestExchangeRate extends React.Component {
  state = {};

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     const base = this.state.value;
  //     // console.log(typeof base);
  //     const basicUrl = "https://api.exchangeratesapi.io/latest?";
  //     if (base === "EUR") {
  //       return fetch(basicUrl)
  //         .then(res => res.json())
  //         .then(
  //           data =>
  //             this.setState({
  //               items: data,
  //               value: base
  //             })
  //           // if (ratesKeys) {
  //           // ratesKeys.push('EUR')
  //           // } // condition to check if EUR present, if not array.push it to array
  //         );
  //     } else {
  //       return fetch(basicUrl + "base=" + base)
  //         .then(res => res.json())
  //         .then(data =>
  //           this.setState({
  //             items: data,
  //             value: base
  //           })
  //         );
  //     }
  //   }
  //   handleChange(event) {
  //     event.preventDefault();
  //     this.setState({
  //       value: event.target.value
  //     });
  //     // console.log(this.state.value);
  //   }

  removeRateIfBase = (key, index) => {
    if (key !== this.props.base) {
      return (
        <li key={index}>
          {key +
            ":" +
            " " +
            parseFloat(Number(this.props.rates[key]).toFixed(5))}
        </li>
      );
    }
  };

  render() {
    // console.log(props.newRatesArray);

    return (
      <div>
        <hr />
        <p className="titleStyles">Request Exchange Rate</p>
        <hr />
        <p>1. Select Base Rate</p>
        <p>
          2. Click{" "}
          <span style={{ color: "red", textDecoration: "underline" }}>
            SUBMIT
          </span>{" "}
          for the base rate to change
        </p>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <select value={this.props.value} onChange={this.props.handleChange}>
              {/* populates the dropdown with the country codes  */}
              {this.props.newRatesArray.map((rates) => (
                <option key={rates.value} value={rates.value}>
                  {rates.display}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        <p> 1 {this.props.value} is equal to: </p>
        <ul>
          {Object.keys(this.props.rates)
            .sort()
            .map((key, index) => this.removeRateIfBase(key, index))}
        </ul>
      </div>
    );
  }
}

// newRatesArray.indexOf('"EUR":"EUR"') == -1

// (rates) => (

//   if (rates.value && rates.display !== 'EUR') {

//   }

//   <option key={rates.value} value={rates.value}>
//     {rates.display}
//   </option>

// for (var prop in object1) {
//   if (object1.hasOwnProperty(prop)) {
//     if (!(prop in object2)) {
//       object2[prop] = object1[prop];
//     }
//   }
// }

// {rates.display !== this.props.base && rates.display}

// removeRateIfBase = (key, index) => {
//   if (key !== this.props.base) {
//     return key + ":" + " " + parseFloat(Number(this.props.rates[key]).toFixed(5))
//   }
// }

// <li key={index}>
//   {key !== this.props.base &&
//     key +
//     ":" +
//     " " +
//     parseFloat(Number(this.props.rates[key]).toFixed(5))}
// </li>

export default RequestExchangeRate;

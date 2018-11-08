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
  render() {
    // console.log(this.props.ratesArray);
    return (
      <div>
        <hr />
        <p className="titleStyles">Request Exchange Rate</p>
        <hr />
        <p>Please Select Base Rate: </p>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <select value={this.props.value} onChange={this.props.handleChange}>
              {this.props.newRatesArray.map(rates => (
                <option key={rates.value} value={rates.value}>
                  {rates.display}
                  {/* <option>EUR</option> */}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        <p> One {this.props.value} is equal to: </p>
        <ul>
          {Object.keys(this.props.rates).map((key, index) => (
            <li key={index}>
              {key}: {parseFloat(Number(this.props.rates[key]).toFixed(5))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RequestExchangeRate;

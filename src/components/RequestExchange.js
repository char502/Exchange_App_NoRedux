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
      isLoaded: false
    };
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
  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }
  render() {
    const { isLoaded, items } = this.state;

    // console.log(this.state);
    console.log(items);
    // console.log(typeof items);
    let rates = items.rates;
    console.log(rates);

    // let test2 = Object.keys(items.rates);
    // console.log(test2);

    // let otherTest = Object.values(items);
    // console.log(otherTest);

    // let otherEnt = Object.entries(items);
    // console.log(otherEnt);

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {/* <p>The base rate is: {Object.values(items)[2]}</p> */}
            <p>
              Rates (Base rate: {Object.values(items)[2]}
              ):
            </p>
            {/* {Object.entries(items.rates).map((item, index) => (
              <li key={index}>
                {item[0]} = {item[1]}
              </li>
            ))} */}
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
}

export default RequestExchange;

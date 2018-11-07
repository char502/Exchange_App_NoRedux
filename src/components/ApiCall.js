// import React from "react";
// import RequestExchange from "./RequestExchange";

export function fetchProfile() {
  let apiUrl = "https://api.exchangeratesapi.io/latest?base=GBP";
  // return promise
  return fetch(apiUrl).then(res => res.json());
}

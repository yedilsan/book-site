"use strict";

function convert(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    { name: "USD", mult: 1 },
    { name: "KZT", mult: 1 / 480 },
    { name: "EUR", mult: 1.1 },
  ];
  const initial = allCurrencies.find((c) => c.name === initialCurrency);
  if (!initial) {
    return null;
  }
  const convert = allCurrencies.find((c) => c.name === convertCurrency);
  if (!convert) {
    return null;
  }
  return new Intl.NumberFormat("kz-KZ", {
    style: "currency",
    currency: convert.name,
  }).format((sum * initial.mult) / convert.mult);
}

console.log(convert(10000, "KZT", "USD"));
console.log(convert(10000, "KZT", "EUR"));
console.log(convert(100, "USD", "KZT"));
console.log(convert(100, "KZT", "EUR"));

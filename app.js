"use strict";

const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products/");
request.send();

request.addEventListener("load", function () {
  const { products } = JSON.parse(this.responseText);
  console.log(products);
  const sum = products.reduce((acc, p) => (acc += p.price), 0);
  console.log(sum / products.length);
});

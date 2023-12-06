"use strict";

async function getAllProducts() {
  const response = await fetch("https://dummyjson.com/products/");
  return response.json();
}

async function getProduct(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  return response.json();
}

}
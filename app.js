"use strict";

const product = { id: 1, name: "Bread", count: 1 };

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function (product) {
  if (this.products.find((p) => p.id === product.id)) {
    return;
  }
  this.products.push(product);
};

Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map((p) => {
    if (p.id == id) {
      p.count++;
      return p;
    }
    return product;
  });
};

Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((p) => {
      if (p.id == id) {
        p.count--;
        return p;
      }
      return product;
    })
    .filter((p) => p.count > 0);
};

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
cart.decreaseAmount(1);
console.log(cart);

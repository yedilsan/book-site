"use strict";

class User {
  #login;
  #_password;
  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split("").reverse().join("");
  }
  get #password() {
    return this.#_password.split("").reverse().join("");
  }
  get login() {
    return this.#login;
  }

  checkPass(pass) {
    return this.#password === pass;
  }

  changePass(oldPass, newPass) {
    if (!this.checkPass(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const user = new User("user@user.use", "123");
console.log(user);
console.log(user.login);

console.log(user.checkPass("321"));
console.log(user.checkPass("123"));

console.log(user.changePass("123", "321"));
console.log(user);

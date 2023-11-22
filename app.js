"use strict";

function pizzaTimer(ms) {
  const end = new Date().getTime() + ms;

  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("kz-KZ", {
        minute: "numeric",
        second: "numeric",
      }).format(end + 100 - new Date()) //add additionally several ms bc event loop
    );
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Pizza is ready!");
  }, ms);
}

pizzaTimer(5000);

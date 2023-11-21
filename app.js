"use strict";

const date = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date));
console.log(date2 - date);

function getDaysBtDays(dateFirst, dateSecond) {
  return (date2 - date) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBtDays(date, date2));

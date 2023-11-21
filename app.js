"use strict";

const user1 = {
  name: "Yedil",
  birthday: "12/23/2022",
};

function isBirthday(user1) {
  const birthdayDate = new Date(user1.birthday);
  const now = new Date();

  if (birthdayDate.getMonth() !== now.getMonth()) {
    return false;
  }
  if (birthdayDate.getDate() !== now.getDate()) {
    return false;
  }
  return true;
}

console.log(isBirthday(user1));

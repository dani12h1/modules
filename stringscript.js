"use strict";

let result;

export function capitalize(str) {
  let tempString = makeSpaces(str);
  return tempString.trim().charAt(0).toUpperCase() + str.trim().substring(1).toLowerCase();
}

function makeSpaces(str) {
  let result = "";

  for (let i = 0; 1 < str.length; i++)
    if (i < str.length - 1) {
      result += str[i] + " ";
    } else {
      result += str[i];
    }
  return result;
}

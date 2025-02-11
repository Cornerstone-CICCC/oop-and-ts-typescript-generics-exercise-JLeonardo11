"use strict";
// 1. Create a generic arrow function called `getFirstElement` that accepts an array of any type 
// and returns the first element of the array. 
// Pass an array of strings ["Hello", "World"] and log the result.
const getFirstElement = (arr) => arr[0];
console.log(getFirstElement(["Hello", "World"])); // Expected output: "Hello"

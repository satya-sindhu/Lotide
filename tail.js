const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };
  const tail = function(arr) {
    console.log(arr);
    arr.shift();
    // console.log(arr);
    return arr;
  };


  const result = tail(["hello", "lighthouse", "labs"]);

  module.exports = tail;
  
// // FUNCTION IMPLEMENTATION
// const sum = function(a, b) { 
//     return a + b;
//   }
  
//   // TEST CODE
//   console.assert(sum(1, 2) === 3);

//   console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

// // FUNCTION IMPLEMENTATION
// const sumBuggy = function(a, b) { 
//     return a * b;
//   }
  
//   // TEST CODE
//   console.assert(sumBuggy(1, 2) === 3); // fails, because bug!

// Function implementation
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  //TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//         console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
//     } else {
//       console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
//     }
//   };

  function eqArrays(arr1, arr2) {
      console.log(arr1);
      console.log(arr2);
      if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
          if(arr1[i] !== arr2[i]) {
            return false;
          } else {
            return true;
          }
        }
      } else {
          return false
      }
    }

    //TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

module.exports = eqArrays;

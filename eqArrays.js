const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
    } else {
      console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
    }
  };

  function eqArrays(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] === arr2[i] && (i <arr1.length - 1)) {
            continue;  
          }
      else if (arr1[i] ===arr2[i] && (i === arr1.length - 1)) {
          return true;
      }
      else {
          return false
      }
    }
}

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
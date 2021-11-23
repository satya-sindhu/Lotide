// [1, 2, 3] === [1, 2, 3] // => false
// [1, 2, 3] == [1, 2, 3] // => false
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  const tail = function(inputValue) {
    let temp = [];
    if (inputValue.length <= 1 || inputValue === undefined || inputValue === null) {
      return [];
    } else {
      for (let i = 1; i < inputValue.length; i++) {
        temp.push(inputValue[i]);
      }
    }
    return temp;
  };
  
  const words = tail(["hello", "lighthouse", "labs"]);
  
  assertEqual(words.length, 3);
  assertEqual(words[0], "lighthouse");
  assertEqual(words[1], "labs");
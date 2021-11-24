const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(inputValue) {
  head_value = inputValue[0];
  //console.log(headvalue)
  return head_value;
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
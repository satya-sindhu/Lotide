// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ " + `Assertion Passed:  ${actual}  ===  ${expected}`);
    } else {
      console.log("🔴 " + `Assertion Failed:  ${actual}  !==  ${expected}`);
    }
  };
  function eqArrays(arr1, arr2){
    for (let i = 0; i < arr1.length ; i++) {
      if (arr1[i] === arr2[i] && (i < arr1.length - 1)) {
        continue;
      }
      else if (arr1[i] === arr2[i] && (i === arr1.length - 1)) {
        return true;
      }
      else {
        return false
      }
    }
  }

  const eqObjects = function(object1, object2) { 
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
      }
    
      for (obj1 of Object.keys(object1)) {
        if (object1[obj1].isArray === true && object2[obj1].isArray === true){
          if (eqArrays(object1[obj1], object2[obj1] === false))
            return false
        } else if (object1[obj1] !== object2[obj1]) {
          return false;
        }
      }
      return true;
};
  
// TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
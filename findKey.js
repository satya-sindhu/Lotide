const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  let findKeyResult = '';
  const findKey = function(obj, callback) {
      for (const key in obj) {
          //console.log(obj[key]);
          if (callback(obj[key])) {
              findKeyResult += key;
              //console.log(findKeyResult);
              break;
          } 
      }
      return findKeyResult;
  }

  console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2));
  
  assertEqual(findKeyResult, 'noma')
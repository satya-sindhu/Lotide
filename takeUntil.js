const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed : ${(actual)} === ${(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed : ${(actual)} !== ${(expected)}`);
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

const takeUntil = function(array, callback) {
    //const result = array.map(x => x > 0 ? x : null)
  //const result = array.map(callback);
  const result = [];
  for (let value of array) {
      if (callback(value)) {
          return result;
      } else {
          result.push(value);
      }
  }
  console.log(result);
  return result;
  }

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ] );
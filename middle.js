const eqArrays = function(arr1, arr2) {
  if(!arr1.length || !arr2.length) return true
  if (arr1.length === arr2.length) {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : ${(actual)} === ${(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${(actual)} !== ${(expected)}`);
  }
};

const middle = function(arr) {
  let newArr =arr;
  let arrayLength = arr.length;
  let half = arrayLength / 2;
  let result = [];
  if (arrayLength === 1 || arrayLength === 2) {
    return result;
  } else if (arrayLength % 2 !== 0) {
    for (let i = 0; i < half - 1; i++) {
      arr.pop();
    }

    let newArrayLength = newArr.length;
    result.push(newArr[newArrayLength - 1]);
    return result;
  } else {
    let middleNum1 = newArr[half];
    let middleNum2 = newArr[half - 1];
    result.push(middleNum2);
    result.push(middleNum1);
    return result;
  }
};

//Test//
// assertArraysEqual(middle([1,2,3]),[2]);
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([]),[]);
// assertArraysEqual(middle([1,2,3,4]),[2]); 
// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1,2]),[]);
// assertArraysEqual(middle([1,2]),[1]); 

module.exports = middle;
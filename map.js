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

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed : ${(actual)} === ${(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed : ${(actual)} !== ${(expected)}`);
    }
};

const map = function(array, callback) {
    const answer = [];
    for (let item of array) {
        answer.push(callback(item))
    }
    return answer;
}
const words = ["ground", "control", "to", "major", "tom"];
const result = map(words, word => word);
console.log(result);
assertArraysEqual(result, words)
function eqArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
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

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed : ${(actual)} === ${(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed : ${(actual)} !== ${(expected)}`);
    }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([3, 2, 3], [3, 2, 3]);
assertArraysEqual([4, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 2, 3]);
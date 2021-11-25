const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    for (let i in sentence) {
        if (sentence[i] !== ' ') {
            console.log(sentence[i])
            if (results[sentence[i]]) {
                results[sentence[i]].push(Number(i));
            } else {
                results[sentence[i]] = [Number(i)];
            }
        }
    }
    return results;
  };

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

assertArraysEqual(letterPositions("hello").l, [1]);
assertArraysEqual(letterPositions("hello").e, [1]);

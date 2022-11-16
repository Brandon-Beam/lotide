let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} ===  + ${expected}`);
  } else {
    console.log(`😭Assertion Failed: ${actual} !==  + ${expected}`);
  }
};
let eqArrays = function(one,two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      return false
    } 
  } return true
} 
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
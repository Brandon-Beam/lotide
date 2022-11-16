let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} ===  + ${expected}`);
  } else {
    console.log(`😭Assertion Failed: ${actual} !==  + ${expected}`);
  }
};
let eqArrays = function (one, two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      return false
    }
  } return true
}
const middle = (list) => {
  for (i = 0; i < list.length; i++) {
    list.shift()
    list.pop()
    if (list.length <= 2) {
      break;
    }
  } console.log(list)
}


middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
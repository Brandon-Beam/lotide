let assertArraysEqual = function (one, two) {
  for (const num of one) {
    if (one[num] !== two[num]) {
      console.log('sadness')
      return
    }
  } console.log('yay')
}
const takeUntil = function (array, callback) {
  const results = []
  for (const element of array) {
    if (callback(element) != true) {
      results.push(element)
    }
    if (callback(element) == true) {
      return results
    }
  }
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');
const test1 = [6, 47, 4, 5, 6, 2, 0]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(test1, x => x <= 0), [6, 47, 4, 5, 6, 2 ])
assertArraysEqual(takeUntil(data1, x => x <= 0), [1, 2, 5, 7, 2])
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"])
const letterPositions = function (sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = []
      results[sentence[i]].push(i)
    }
  } delete results[' '] 
  console.log(results)
  return results;
};
let assertArraysEqual = function(one,two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
       console.log('sadness')
       return
      } 
  }  console.log('yay')
} 
assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house")
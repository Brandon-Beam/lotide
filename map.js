const numbers = [1,2,3,4,5,6]
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  } return results;
}
const assertArraysEqual = function(one,two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
       console.log('sadness')
       return
      } 
  }  console.log('yay')
} 
assertArraysEqual(map(words, word => word[0]),words.map(word => word[0]));
assertArraysEqual(map(numbers,irreleventName => irreleventName * 5),numbers.map(AnotherIrreleventName => AnotherIrreleventName * 5))
assertArraysEqual(map(numbers,x=>x++),numbers.map(x=>x++))
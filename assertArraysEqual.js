let assertArraysEqual = function(one,two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
       console.log('sadness')
       return
      } 
  }  console.log('yay')
} 
assertArraysEqual([1,2,3],[1,2,5])
assertArraysEqual([1,2,3],[1,2,3])
assertArraysEqual([1,2,3],[1,2,5])
assertArraysEqual(['1',2,3],['1',2,3])
assertArraysEqual([1,2,3],[1,2,3])
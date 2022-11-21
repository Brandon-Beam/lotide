let assertArraysEqual = function (one, two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      console.log('sadness')
      return
    }
  } console.log('yay')
}

module.exports = assertArraysEqual
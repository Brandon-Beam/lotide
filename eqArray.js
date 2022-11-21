let eqArray = function (one, two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      return false
    }
  } return true
};

module.exports = eqArray
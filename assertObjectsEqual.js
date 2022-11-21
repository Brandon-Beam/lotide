const assertObjectsEqual = function (actual, expected) {
  for (const key in actual) {
    if (actual[key] !== expected[key]) {
      console.log('sadness')
      return
    }
  } console.log('yay')
};

module.exports = assertObjectsEqual
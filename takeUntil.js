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
module.exports = takeUntil
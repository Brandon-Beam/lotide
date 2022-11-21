const findKeyByValue = (object, value) => {
  for (const item in object) {
    if (object[item] === value) {
      return item
    }
  }
}
module.exports = findKeyByValue
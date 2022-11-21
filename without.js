const without = (array, itemsToRemove) => {
  const list = array.filter(item => !itemsToRemove.includes(item))
  return list
}
module.exports = without

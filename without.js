const without = (array, itemsToRemove) => {
  const list = array.filter(item => !itemsToRemove.includes(item))
  console.log(list)
  return list
}
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"])

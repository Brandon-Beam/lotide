const middle = (list) => {
  for (i = 0; i < list.length; i++) {
    list.shift()
    list.pop()
    if (list.length <= 2) {
      break;
    }
  } return list
}

module.exports = middle

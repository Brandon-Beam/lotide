const countLetters = (sentence) => {
  const result = {}
  for (const letter of sentence) {
    if (result[letter]) {
      result[letter] += 1
    } else {
      result[letter] = 1
    }
  } console.log(result)
}
module.exports = countLetters
let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} ===  + ${expected}`);
  } else {
    console.log(`😭Assertion Failed: ${actual} !==  + ${expected}`);
  }
};
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
countLetters('fghjfdghjfhjg fyuftyu')
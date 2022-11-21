const eqObjects = (object1, object2) => {
  const object1keys = Object.keys(object1)
  const object2keys = Object.keys(object2)
  if (object1keys.length !== object2keys.length) {
    return false;
  }
  for (const key of object1keys) {
    const value1 = object1[key]
    const value2 = object2[key]
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (eqArrays(value1, value2) === false) {
        return false
      }
      continue
    }
    if (value1 !== value2) {
      return false
    }
  } return true
};
module.exports = eqObjects
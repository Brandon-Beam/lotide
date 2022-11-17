const eqObjects = (object1, object2) => {
  const object1keys= Object.keys(object1)
  const object2keys= Object.keys(object2)

  if (object1keys.length !== object2keys.length) {
    return false;
  }
   for (const key of object1keys) {
    const value1 = object1[key]
    const value2 = object2[key]
    if (Array.isArray(value1) && Array.isArray(value2)) {
       if (eqArrays(value1,value2) === false) {
        return false
      }
      continue
    }
    if (value1 !== value2) {
      return false
    } 
  } return true 
};

let eqArrays = function(one,two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      return false
    } 
  } return true
} 
const assertObjectsEqual = function(actual, expected) {
  for (const key in actual) {
    if (actual[key] !== expected[key]) {
       console.log('sadness')
       return
      } 
  }  console.log('yay')
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true)
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
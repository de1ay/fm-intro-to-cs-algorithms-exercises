/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

/**
 * @returns {Number}
 */
function nestedAdd(val) {
  if (Array.isArray(val)) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
      sum += nestedAdd(val[i]);
    }
    return sum;
  } else if (typeof val === "number") {
    return val;
  }
  return 0;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});

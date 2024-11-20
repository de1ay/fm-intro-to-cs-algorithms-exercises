/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

/**
 * @param {Array<Number>} left
 * @param {Array<Number>} right
 * @returns {Array<Number>}
 */
function mergeArrays(left, right) {
  let res = [];
  let leftPtr = 0;
  let rightPtr = 0;
   
  while(leftPtr < left.length && rightPtr < right.length) {
    const leftVal = left[leftPtr];
    const rightVal = right[rightPtr];

    if(leftVal <= rightVal) {
      res.push(leftVal);
      leftPtr++;
    } else {
      res.push(rightVal);
      rightPtr++;
    }
  }

  if(leftPtr === left.length) {
    res.push(...right.slice(rightPtr));
  } else {
    res.push(...left.slice(leftPtr));
  }

  return res;
}

/**
 * @param {Array<Number>} nums
 * @returns {Array<Number>}
 */
const mergeSort = (nums) => {
  if(nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);

  const left = mergeSort(nums.slice(0, middle));
  const right = mergeSort(nums.slice(middle));

  return mergeArrays(left, right);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

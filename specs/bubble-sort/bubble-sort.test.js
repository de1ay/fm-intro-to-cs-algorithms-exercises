/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

/** 
 * @param {Array<Number>} nums 
 */
function bubbleSort(nums) {
  for(let i = nums.length - 1; i > 0; i--) {
    let hasSwapOccurred = false;
    for(let j = 0; j < i; j++) {
      if(nums[j] > nums[j+1]) {
        const tmp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = tmp;
        hasSwapOccurred = true;
      }
    }
    if(!hasSwapOccurred) {
      break;
    }
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

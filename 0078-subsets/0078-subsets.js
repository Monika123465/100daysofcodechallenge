/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
      let res = []
  subs(nums, res, [], 0)
  return res
    
};
let subs = function (nums, res, arr, start) {
  let len = nums.length

  res.push(Array.from(arr))

  if (start === len) return;

  for (let i = start; i < len; i++) {
    arr.push(nums[i])
    subs(nums, res, arr, i + 1);
    arr.pop()
  }
};

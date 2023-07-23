/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
        if (nums.length < 3) return false
  
  let num = -Infinity
  let stack = []
    for (let i =nums.length - 1; i > -1; i--) {
    if (nums[i] < num) return true
    else {
      while (stack.length && stack[stack.length - 1] < nums[i]) {
        num = stack.pop()
      }
    }
    stack.push(nums[i])
  }
  
  return false

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   
     if (!nums.length) return 0
  let localMax = 0
  let localMin = 0
  let lastMax = nums[0]
  let lastMin = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(lastMax * nums[i], lastMin * nums[i], nums[i])
    localMin = Math.min(lastMax * nums[i], lastMin * nums[i], nums[i])
    max = Math.max(max, localMax)
    lastMax = localMax
    lastMin = localMin
  }
  return max
};
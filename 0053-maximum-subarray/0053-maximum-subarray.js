/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  

    let maxsum=-Infinity
    let currsum=-Infinity
    for(let i=0;i<nums.length;i++){
        currsum=Math.max(0,currsum)
        currsum+=nums[i]
        maxsum=Math.max(maxsum,currsum)
    }
    return maxsum
};
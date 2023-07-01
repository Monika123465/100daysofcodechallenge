/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length===0) return 0
    if(nums.length==1) return nums[0]
    
    let robhouse=[nums[0],Math.max(nums[0],nums[1])]
    
    for(let i=2;i<nums.length;i++){
       robhouse[i]=Math.max(robhouse[i-2]+nums[i],robhouse[i-1])
    }
    return robhouse[nums.length-1]
    
};
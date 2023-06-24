/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
     
     let ans;
    for(let i=0;i<nums.length;i++){
        if(nums[Math.abs(nums[i])-1]>0){
            nums[Math.abs(nums[i])-1]*=-1;
        }
        else{
            ans=Math.abs(nums[i]);
        }
    }
    return ans;
};
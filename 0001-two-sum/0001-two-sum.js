/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
          
         let bag=[] 
         for(let i=0;i<nums.length;i++){
             for(let j=i+1;j<nums.length;j++){
                 if(nums[i]+nums[j]===target){
                     bag=[i,j]
                 }
             }
         }
         return bag
    
};
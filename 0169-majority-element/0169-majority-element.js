/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority=0; 
    let count=1
    
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[majority]){
            count++
        }else{
          count--
  }
        if(count===0){
            majority=i
            count=1
        }
}
    return nums[majority]
    
};
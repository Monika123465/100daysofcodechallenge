/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    

 let Sum = 0;
    let correctSum = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        correctSum += i;
        Sum += i < nums.length ? nums[i] : 0;
    }
    return correctSum - Sum;
    
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let one = 0
         let two = 0
         let common= 0

    for(let i = 0; i < nums.length; i++) {
        two |= (one & nums[i])
        one ^= nums[i]

        common = ~(one & two)
        one &= common
        two &= common
    }

    return one
    
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let value=[]
    
   res(value,[],nums)
    return value
    
};

let res=function(value,arr,nums){
    let len=nums.length;
    let temp1=null
    let temp2=null
     
    if(!len) return value.push(arr)
    
    for(let i=0;i<len;i++){
        temp1=Array.from(arr)
        temp1.push(nums[i])
        
        temp2=Array.from(nums)
        temp2.splice(i,1)
        
        res(value,temp1,temp2)
    }
}
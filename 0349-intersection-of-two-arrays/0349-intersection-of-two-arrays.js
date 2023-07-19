/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let  data1=new Set(nums1)
    let data2=new Set(nums2)
    
    let arr=[]
    
    for(let key of data1){
        if(data2.has(key)){
            arr.push(key)
}
    }
    return arr
};
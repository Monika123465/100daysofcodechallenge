/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count=0
    let str=s.trim()
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            count=0
        }else{
            count++
        }
    }
    return count
    
};
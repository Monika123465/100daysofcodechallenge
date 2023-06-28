/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  
    if(s.length<=numRows||numRows<2) return s
     let nums=2*(numRows-1)
    let res=Array(numRows).fill("")
    let temp=0
    for(let i=0;i<s.length;i++){
        temp=i%nums
        if(temp<numRows){
            res[temp] +=s[i]
        }else{
            res[nums-temp] +=s[i]
}
    }
    return res.join("")
};
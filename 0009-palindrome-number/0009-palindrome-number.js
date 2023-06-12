/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let xn=x.toString()
    let bag=""
    for(let i=xn.length - 1;i>=0;i--){
    bag+=xn[i]
    }
    if(bag==xn){
    return true
    }else{
    return false
    }
    
   
    
};
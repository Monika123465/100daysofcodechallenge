/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // let xn=x.toString()
    // let bag=""
    // for(let i=xn.length;i>0;i--){
    //     bag+=xn[i]
    // }
    // if(bag==xn){
    //     return true
    // }else{
    //     return false
    // }
    
    const isnegative=x<0 ?true:false
    if(isnegative){
        return false
    }
    
    const temp=x
    let reversed=0
    while(x>0){
        reversed=(reversed*10)+(x%10)
        x=parseInt(x/10)
    }
    return reversed==temp
    
};
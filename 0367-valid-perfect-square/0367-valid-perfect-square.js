/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    let left=0;
    let right=num
    
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let curr=mid*mid
        if(curr===num){
            return true
        }if(curr<num){
            left=mid+1
      }else{
          right=mid-1
}

    }
    return false
    
};
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
     
    let left = matrix[0][0]
    let right = matrix[matrix.length-1][matrix.length-1]
    let mid
    while(left < right){
        mid = Math.floor((left+right)/2)
        let lessOrEqualM = 0
        matrix.forEach(row => {
            row.forEach(num => {
                if(num<=mid) lessOrEqualM++
            })
        })
        if(lessOrEqualM>=k) right = mid
        if(lessOrEqualM<k) left = mid + 1
    }
return left 
    
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     let n = matrix.length
  let m = (matrix[0] || []).length
  
 let  leftl = 0
  let rightr = (n * m) - 1
  let mid = 0
  let temp = 0
  while (leftl <= rightr) {
    mid = leftl + Math.floor((rightr - leftl) / 2)
    temp = matrix[Math.floor(mid / m)][mid % m]
    if (temp === target) {
      return true
    } else if (temp > target) {
      rightr = mid - 1
    } else {
      leftl = mid + 1
    }
  }
  return false
    
};
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    if (arr.length < 3) {
    return -1
  }
  let aux = (low, high) => {
    if (low > high) {
      return -1
    }
    const middle = Math.floor((low + high) / 2)
    if (arr[middle] <= arr[middle + 1]) {
      return aux(middle + 1, high)
    } if (arr[middle] <= arr[middle - 1]) {
      return aux(low, middle - 1)
    }
    return middle
  }
  return aux(0, arr.length - 1)
    
};
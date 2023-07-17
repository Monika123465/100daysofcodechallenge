/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
     if(intervals.length <= 1) return intervals
    
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let output = [intervals[0]]
    let current = output[0]
  
     for(let i = 1; i< intervals.length;i++) {
        let  next = intervals[i]
        if(current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1])
        } else {
            current = next
            output.push(current)
        }
    }
    return output
    
};